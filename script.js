function openCard() {
  const envelopeScreen = document.getElementById('envelope-screen');
  const mainContent = document.getElementById('main-content');
  
  envelopeScreen.style.opacity = '0';
  setTimeout(() => {
    envelopeScreen.style.display = 'none';
    mainContent.classList.remove('hidden');
  }, 800);
}
