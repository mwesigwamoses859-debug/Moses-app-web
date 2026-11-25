(() => {
  if (document.getElementById('mosestech-ai-pet')) return;
  const container = document.createElement('div');
  container.className = 'ai-pet';
  container.id = 'mosestech-ai-pet';
  const link = document.createElement('a');
  link.className = 'ai-pet__button';
  link.href = 'https://ai.mosestechfixsolution.com/';
  link.textContent = 'Ask MosesTech AI';
  container.appendChild(link);
  document.body.appendChild(container);
})();
