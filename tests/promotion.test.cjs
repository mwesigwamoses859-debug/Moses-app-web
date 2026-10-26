const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = (file) => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');

function analytics({ hostname = 'mosestechfixsolution.com', privacy = {} } = {}) {
  const handlers = new Map();
  const scripts = [];
  const location = new URL(`https://${hostname}/?customer=private`);
  const window = { location };
  const document = {
    referrer: 'https://example.com/referral?email=private@example.com',
    head: { appendChild: (element) => scripts.push(element) },
    createElement: () => ({}),
    addEventListener: (name, handler) => handlers.set(name, handler),
  };
  vm.runInNewContext(source('assets/analytics.js'), { window, document, navigator: privacy, URL });
  const calls = () => Array.from(window.dataLayer || [], (args) => Array.from(args));
  return {
    calls, scripts,
    events: () => calls().filter(([type]) => type === 'event'),
    dispatch: (type, event) => handlers.get(type)?.(event),
    click(href, dataset = {}, section = 'contact') {
      const link = { dataset, getAttribute: () => href, closest: () => ({ id: section }) };
      handlers.get('click')?.({ target: { closest: () => link } });
    },
  };
}

test('YouTube clicks keep the video and placement, excluding URL query data', () => {
  const page = analytics();
  page.click('https://www.youtube.com/shorts/9vKnevCFTds?customer=private', {
    videoId: '9vKnevCFTds', trackLocation: 'featured_windows',
  });
  const [[, name, details]] = page.events();
  assert.equal(name, 'youtube_click');
  assert.equal(details.video_id, '9vKnevCFTds');
  assert.equal(details.link_location, 'featured_windows');
  assert.equal(details.link_url, 'https://www.youtube.com/shorts/9vKnevCFTds');
  assert.ok(!JSON.stringify(details).includes('private'));
});

test('WhatsApp, phone and email clicks never include message or contact contents', () => {
  const page = analytics();
  page.click('https://wa.me/256123456789?text=private%20customer%20message');
  page.click('tel:+256123456789');
  page.click('mailto:private@example.com?body=private');
  assert.deepEqual(page.events().map(([, name, details]) => [name, details.method]), [
    ['service_enquiry_click', 'WhatsApp'],
    ['service_enquiry_click', 'Phone'],
    ['service_enquiry_click', 'Email'],
  ]);
  assert.ok(!JSON.stringify(page.events()).includes('private'));
  assert.ok(!JSON.stringify(page.events()).includes('256123456789'));
  assert.ok(!page.events().some(([, name]) => name === 'generate_lead'));
});

test('opening the request form is separate from contacting Moses', () => {
  const page = analytics();
  page.click('/service-request.html?service=Website', { trackLocation: 'meet_moses' });
  assert.equal(page.events()[0][1], 'service_request_click');
  assert.equal(page.events()[0][2].link_location, 'meet_moses');
  page.click('https://example.com/service-request.html');
  page.click('https://www.youtube.com.example.com/shorts/9vKnevCFTds');
  assert.equal(page.events().length, 1);
});

test('only a valid WhatsApp form records an enquiry handoff', () => {
  const page = analytics();
  page.dispatch('submit', { target: { matches: () => true, checkValidity: () => false } });
  assert.equal(page.events().length, 0);
  page.dispatch('submit', { target: { matches: () => true, checkValidity: () => true } });
  assert.equal(page.events()[0][1], 'service_enquiry_handoff');
  assert.equal(page.events()[0][2].method, 'WhatsApp form');
});

test('video loads are reported separately from outbound YouTube clicks', () => {
  const page = analytics();
  page.dispatch('mosestechfix:video-load', { detail: { videoId: 'unexpected' } });
  assert.equal(page.events().length, 0);
  page.dispatch('mosestechfix:video-load', { detail: { videoId: 'eleoykpHfgI' } });
  assert.equal(page.events()[0][1], 'video_embed_open');
  assert.equal(page.events()[0][2].video_id, 'eleoykpHfgI');
});

test('page configuration strips query data and disables advertising signals', () => {
  const page = analytics();
  const [, measurement, config] = page.calls().find(([type]) => type === 'config');
  assert.equal(measurement, 'G-KG6CEP3WVG');
  assert.equal(config.page_location, 'https://mosestechfixsolution.com/');
  assert.equal(config.page_referrer, 'https://example.com/referral');
  assert.equal(config.allow_google_signals, false);
  assert.equal(config.allow_ad_personalization_signals, false);
  assert.equal(page.scripts.length, 1);
});

test('preview visits and privacy preferences do not load Google Analytics', () => {
  for (const settings of [
    { hostname: 'localhost' },
    { hostname: 'preview.example.com' },
    { privacy: { globalPrivacyControl: true } },
    { privacy: { doNotTrack: '1' } },
  ]) {
    const page = analytics(settings);
    page.click('https://www.youtube.com/@MosesTechFixSolutions');
    assert.equal(page.scripts.length, 0);
    assert.equal(page.calls().length, 0);
  }
});

test('players are created only after selection, use privacy-enhanced embeds and remain keyboard accessible', () => {
  let handler;
  const frames = [];
  const events = [];
  const status = {};
  const slot = { replaceChildren: (frame) => frames.push(frame) };
  const button = {
    dataset: { loadVideo: '9vKnevCFTds', videoTitle: 'Windows update tutorial' },
    closest: () => ({ querySelector: () => slot }),
  };
  const document = {
    addEventListener: (_, callback) => { handler = callback; },
    createElement: () => ({ focus() { this.focused = true; } }),
    getElementById: () => status,
    dispatchEvent: (event) => events.push(event),
  };
  class CustomEvent { constructor(type, options) { this.type = type; this.detail = options.detail; } }
  vm.runInNewContext(source('assets/home-promotion.js'), { document, CustomEvent });
  assert.equal(frames.length, 0);
  handler({ target: { closest: () => button } });
  assert.equal(frames.length, 1);
  assert.equal(frames[0].src, 'https://www.youtube-nocookie.com/embed/9vKnevCFTds?rel=0&playsinline=1');
  assert.equal(frames[0].title, 'Windows update tutorial');
  assert.equal(frames[0].allowFullscreen, true);
  assert.equal(frames[0].tabIndex, 0);
  assert.equal(frames[0].focused, true);
  assert.equal(events[0].type, 'mosestechfix:video-load');
  assert.match(status.textContent, /Use the YouTube player to start playback/);
  button.dataset.loadVideo = 'unexpected';
  handler({ target: { closest: () => button } });
  assert.equal(frames.length, 1);
});
