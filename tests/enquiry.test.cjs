const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'service-request.html'), 'utf8');
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).find(s => s.includes('const services ='));

function requestPage(service) {
  const elements = Object.fromEntries(['enquiry-form-link', 'enquiry-frame', 'service-whatsapp'].map(id=>[id,{}]));
  const url = new URL('https://mosestechfixsolution.com/service-request');
  url.searchParams.set('service', service);
  vm.runInNewContext(script, { URL, Set, encodeURIComponent, window:{ location:url }, document:{ getElementById:id=>elements[id] } });
  return elements;
}

test('service links preselect the same service in the real Google form and WhatsApp alternative', () => {
  for (const service of ['Website project','Computer repair or support','Training course','IT procurement support','TIN or passport assistance','Other service']) {
    const elements=requestPage(service);
    const form=new URL(elements['enquiry-frame'].src);
    assert.equal(form.hostname,'docs.google.com');
    assert.equal(form.searchParams.get('entry.403452146'),service);
    assert.equal(form.searchParams.get('embedded'),'true');
    assert.equal(new URL(elements['enquiry-form-link'].href).searchParams.get('entry.403452146'),service);
    assert.equal(new URL(elements['service-whatsapp'].href).searchParams.get('text'),`Hi Moses, I would like to ask about: ${service}. Please guide me on the next step.`);
  }
});

test('unknown query values cannot inject content into the enquiry form or WhatsApp link', () => {
  for(const service of ['<script>alert(1)</script>','private customer text','__proto__']) {
    const elements=requestPage(service);
    assert.equal(elements['enquiry-frame'].src,undefined);
    assert.equal(elements['service-whatsapp'].href,undefined);
  }
});
