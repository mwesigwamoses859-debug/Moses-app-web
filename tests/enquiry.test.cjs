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
  vm.runInNewContext(script, { URL, Set, encodeURIComponent, window:{ location:url }, document:{ getElementById:id=>elements[id], querySelector:()=>({}) } });
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
    if (service === 'Website project') {
      assert.equal(elements['service-whatsapp'].href,'website-development.html#website-quote');
      continue;
    }
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

test('the website quote can be sent by WhatsApp or email with the MosesTech AI source', () => {
  const script=fs.readFileSync(path.join(__dirname,'..','assets','website-enquiries.js'),'utf8');
  for (const channel of ['whatsapp','email']) {
    let submit, destination;
    const emailLink={};
    const form={addEventListener:(_,fn)=>{submit=fn;},reportValidity:()=>true};
    const fields={business:'Demo catering',services:'Food delivery'};
    vm.runInNewContext(script,{
      document:{getElementById:id=>id==='website-project-brief'?form:emailLink},
      window:{location:{href:'https://mosestechfixsolution.com/website-development?utm_source=mosestech_ai',assign:url=>{destination=new URL(url);}}},
      URL,encodeURIComponent,FormData:class{get(name){return fields[name]||'';}}
    });
    submit({preventDefault(){},submitter:{value:channel}});
    const draft=destination.searchParams.get(channel==='email'?'body':'text');
    assert.match(draft,/Enquiry source: mosestech_ai/);
    assert.match(draft,/Demo catering/);
    if (channel==='email') {
      assert.equal(destination.protocol,'mailto:');
      assert.equal(destination.pathname,'mosestechfixsolutions@gmail.com');
      assert.equal(destination.searchParams.get('subject'),'Website quote from MosesTech AI');
      assert.equal(new URL(emailLink.href).searchParams.get('subject'),'Website quote from MosesTech AI');
    } else {
      assert.equal(destination.origin,'https://wa.me');
      assert.equal(destination.pathname,'/256708262179');
    }
  }
});
