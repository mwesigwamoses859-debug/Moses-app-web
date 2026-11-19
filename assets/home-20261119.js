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

// Link the public fee sheet from the existing course listings.
(() => {
  const route = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '');
  const sections = {
    '': '.training .actions a',
    '/index': '.training .actions a',
    '/computer-training': '.page-hero a[href="#course-fees"]',
    '/offers': 'a[href="index.html#pricing"]',
    '/services': 'main .card a[href="computer-training.html"]',
  };
  if (!Object.hasOwn(sections, route)) return;
  const feePage = '/computer-course-fees';
  const entry = document.querySelector(sections[route]);
  if (!entry) return;
  entry.href = feePage;
  if (route === '/services') {
    entry.textContent = 'View courses and fees';
    return;
  }

  const pricing = document.querySelector('#pricing');
  const feesSection = document.querySelector('#course-fees');
  const offer = route === '/offers'
    ? Array.from(document.querySelectorAll('main .card')).find(card => card.querySelector('h3')?.textContent.trim() === 'Office 365 classes')
    : null;
  if (!pricing && !feesSection && !offer) return;

  const link = document.createElement('a');
  link.href = feePage;
  link.textContent = 'View computer course fees';
  if (pricing) {
    pricing.classList.remove('prices');
    pricing.replaceChildren(link);
  }
  if (offer) {
    offer.querySelector('h3').textContent = 'Computer course fees';
    offer.querySelector('p').textContent = 'Choose a course and ask about the next class.';
    const offerLink = offer.querySelector('a');
    offerLink.href = feePage;
    offerLink.textContent = 'Explore courses and fees';
    offerLink.removeAttribute('target');
  }
  if (feesSection) {
    const heading = feesSection.querySelector('h2');
    heading.textContent = 'Computer course fees';
    const intro = feesSection.querySelector('.lead');
    intro.replaceChildren(link);
    const oldGrid = feesSection.querySelector('.grid-2');
    const packages = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = 'Other course packages · ask which subjects qualify';
    packages.append(summary);
    oldGrid.replaceWith(packages);
    packages.append(oldGrid);
    document.querySelector('main .page-hero').after(feesSection);
  }

  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = '/assets/training-fees.css';
  document.head.append(style);

  // The same public HTML supplies the fees to every entry point.
  async function showFees() {
    const response = await fetch(feePage);
    if (!response.ok) return;
    const feeDocument = new DOMParser().parseFromString(await response.text(), 'text/html');
    const cards = feeDocument.querySelectorAll('#published-course-fees > article');
    if (!cards.length) return;

    if (feesSection) {
      const grid = document.createElement('div');
      grid.className = 'grid-3';
      for (const card of cards) {
        const copy = document.importNode(card, true);
        const title = document.createElement('h3');
        title.textContent = copy.querySelector('h2').textContent;
        copy.querySelector('h2').replaceWith(title);
        grid.append(copy);
      }
      feesSection.querySelector('details').before(grid);
      return;
    }
    const list = document.createElement('dl');
    list.className = 'training-rates';
    for (const card of cards) {
      const row = document.createElement('div');
      const name = document.createElement('dt');
      const price = document.createElement('dd');
      name.textContent = card.querySelector('h2').textContent;
      price.textContent = card.querySelector('.course-price').textContent;
      row.append(name, price);
      list.append(row);
    }
    if (pricing) pricing.replaceChildren(list);
    if (offer) offer.querySelector('p').replaceWith(list);
  }
  // The direct link remains usable if the list cannot be loaded.
  showFees().catch(() => {});
})();
