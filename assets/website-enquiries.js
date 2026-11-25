(function () {
  'use strict';
  const form = document.getElementById('website-project-brief');
  if (!form) return;

  const campaignSource = new URL(window.location.href).searchParams.get('utm_source');
  const fromAI = campaignSource === 'mosestech_ai';
  const subject = fromAI ? 'Website quote from MosesTech AI' : 'Website quote request';
  const emailLink = document.getElementById('website-quote-email');
  if (fromAI && emailLink) emailLink.href = 'mailto:mosestechfixsolutions@gmail.com?subject=' + encodeURIComponent(subject);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const value = (name) => String(values.get(name) || '').trim();
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
    if (event.submitter?.value === 'email') {
      window.location.assign('mailto:mosestechfixsolutions@gmail.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(message));
      return;
    }
    const destination = new URL('https://wa.me/256708262179');
    destination.searchParams.set('text', message);
    window.location.assign(destination.href);
  });
}());
