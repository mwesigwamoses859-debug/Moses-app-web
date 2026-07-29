(function () {
  if (document.getElementById('mosestech-ai-pet')) return;

  var portalUrl = 'https://mosestechfixai.mwesigwamoses859.workers.dev/';
  var pet = document.createElement('div');
  pet.className = 'ai-pet';
  pet.id = 'mosestech-ai-pet';
  pet.innerHTML =
    '<div class="ai-pet__hint" aria-hidden="true">Need help? Ask Fix AI</div>' +
    '<button class="ai-pet__button" type="button" aria-label="Open MosesTech Fix AI" aria-haspopup="dialog" aria-expanded="false">' +
      '<span class="ai-pet__antenna" aria-hidden="true"></span>' +
      '<span class="ai-pet__face" aria-hidden="true">' +
        '<img class="ai-pet__logo" src="assets/mosestechfix-robot-logo.jpg" alt="">' +
      '</span>' +
      '<span class="ai-pet__feet" aria-hidden="true"></span>' +
    '</button>';

  var dialog = document.createElement('div');
  dialog.className = 'ai-pet-dialog';
  dialog.hidden = true;
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'ai-pet-dialog-title');
  dialog.innerHTML =
    '<div class="ai-pet-dialog__panel">' +
      '<div class="ai-pet-dialog__header">' +
        '<h2 class="ai-pet-dialog__title" id="ai-pet-dialog-title"><span aria-hidden="true">🤖</span> MosesTech Fix AI</h2>' +
        '<div class="ai-pet-dialog__actions">' +
          '<a class="ai-pet-dialog__link" href="ai-support.html">Full page</a>' +
          '<a class="ai-pet-dialog__link" href="' + portalUrl + '" target="_blank" rel="noopener noreferrer">New tab ↗</a>' +
          '<button class="ai-pet-dialog__close" type="button" aria-label="Close Fix AI">&times;</button>' +
        '</div>' +
      '</div>' +
      '<iframe class="ai-pet-dialog__frame" title="MosesTech Fix AI Troubleshooting Portal" allow="camera; microphone; geolocation" referrerpolicy="strict-origin-when-cross-origin"></iframe>' +
    '</div>';

  document.body.appendChild(pet);
  document.body.appendChild(dialog);

  var trigger = pet.querySelector('.ai-pet__button');
  var hint = pet.querySelector('.ai-pet__hint');
  var closeButton = dialog.querySelector('.ai-pet-dialog__close');
  var frame = dialog.querySelector('.ai-pet-dialog__frame');
  var previousOverflow = '';

  function openDialog() {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    frame.src = portalUrl;
    closeButton.focus();
  }

  function closeDialog() {
    dialog.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    frame.removeAttribute('src');
    document.body.style.overflow = previousOverflow;
    trigger.focus();
  }

  trigger.addEventListener('click', openDialog);
  closeButton.addEventListener('click', closeDialog);
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) closeDialog();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !dialog.hidden) closeDialog();
  });

  window.setTimeout(function () {
    hint.style.opacity = '0';
    hint.style.transform = 'translateY(5px)';
  }, 7000);
})();
