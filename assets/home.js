(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('main-navigation');
  if (!toggle || !navigation) return;
  document.documentElement.classList.add('js');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
})();
