// O módulo fica inativo visualmente quando winter-theme é removida do body.
const winterMotionButton = document.getElementById('winter-motion');
winterMotionButton.addEventListener('click', () => {
  const paused = document.body.classList.toggle('winter-paused');
  winterMotionButton.setAttribute('aria-pressed', String(paused));
  winterMotionButton.textContent = paused ? 'Retomar animações' : 'Pausar animações';
});
