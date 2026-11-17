(function () {
  'use strict';
  const form = document.getElementById('website-project-brief');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const value = (name) => String(values.get(name) || '').trim();
    const campaignSource = new URL(window.location.href).searchParams.get('utm_source');
    const source = (campaignSource || 'website-development').replace(/[\r\n]/g, ' ').slice(0, 80);
    const message = [
      'Hi Moses, I need a business website.',
      '',
      'Business / organisation: ' + value('business'),
      'What we do: ' + value('services'),
      'Main website goal: ' + value('goal'),
      'Package / budget choice: ' + value('budget'),
      'Preferred launch: ' + (value('timeline') || 'Please advise'),
      'Pages or extra features: ' + (value('features') || 'Please recommend the right pages'),
      '',
      'Please confirm the scope, delivery date, renewals and any additional costs before work starts.',
      'Enquiry source: ' + source
    ].join('\n');
    const destination = new URL('https://wa.me/256708262179');
    destination.searchParams.set('text', message);
    window.location.assign(destination.href);
  });
}());
