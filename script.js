function openCard() {
  const envelope = document.getElementById('envelope-screen');
  const mainContent = document.getElementById('main-content');
  
  // تأثير اختفاء الظرف
  envelope.style.opacity = '0';
  
  setTimeout(() => {
    envelope.classList.add('hidden');
    mainContent.classList.remove('hidden');
    // إظهار المحتوى بسلاسة
    mainContent.style.opacity = '1';
  }, 800);
}
