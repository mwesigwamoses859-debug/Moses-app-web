/* Existing Fix AI portal, presented as a compact text button and native dialog. */
(() => {
  if (document.getElementById('mosestech-ai-pet')) return;
  const portalUrl = 'https://mosestechfixai.mwesigwamoses859.workers.dev/';
  const pet = document.createElement('div');
  pet.className = 'ai-pet';
  pet.id = 'mosestech-ai-pet';
  pet.innerHTML = '<button class="ai-pet__button" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="fix-ai-dialog"><span aria-hidden="true">?</span> Ask Fix AI</button>';
  const dialog = document.createElement('dialog');
  dialog.className = 'ai-pet-dialog';
  dialog.id = 'fix-ai-dialog';
  dialog.setAttribute('aria-labelledby', 'ai-pet-dialog-title');
  dialog.innerHTML = '<div class="ai-pet-dialog__panel">' +
    '<div class="ai-pet-dialog__header"><h2 class="ai-pet-dialog__title" id="ai-pet-dialog-title">MosesTech Fix AI</h2>' +
    '<div class="ai-pet-dialog__actions"><a class="ai-pet-dialog__link" href="ai-support.html">Full page</a>' +
    '<a class="ai-pet-dialog__link" href="' + portalUrl + '" target="_blank" rel="noopener noreferrer">New tab ↗</a>' +
    '<button class="ai-pet-dialog__close" type="button" aria-label="Close Fix AI">×</button></div></div>' +
    '<iframe class="ai-pet-dialog__frame" title="MosesTech Fix AI Troubleshooting Portal" allow="camera; microphone; geolocation" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>';
  document.body.append(pet, dialog);
  const trigger = pet.querySelector('button');
  const frame = dialog.querySelector('iframe');
  let previousOverflow = '';
  const close = () => dialog.close();
  trigger.addEventListener('click', () => {
    previousOverflow = document.body.style.overflow;
    frame.src = portalUrl;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    trigger.setAttribute('aria-expanded', 'true');
    dialog.querySelector('button').focus();
  });
  dialog.querySelector('button').addEventListener('click', close);
  dialog.addEventListener('click', event => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener('close', () => {
    frame.removeAttribute('src');
    document.body.style.overflow = previousOverflow;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  });
})();
