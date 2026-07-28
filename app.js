const hero = document.querySelector('.hero');
const layersToggle = document.querySelector('#layers-toggle');

layersToggle?.addEventListener('click', () => {
  const isActive = hero.classList.toggle('is-exploded');
  layersToggle.setAttribute('aria-pressed', String(isActive));
  layersToggle.innerHTML = `${isActive ? 'Ocultar capas' : 'Ver cómo funciona'} <span>+</span>`;
});
