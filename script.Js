window.onload = () => {
  // بدء حركة الزهور
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // إظهار الزر بقوة بعد 6 ثوانٍ
  setTimeout(() => {
    const msgBtn = document.getElementById('message-btn');
    if (msgBtn) {
      msgBtn.classList.add('show');
    }
  }, 6000); 

  // تعريف المتغيرات للأزرار
  const msgBtn = document.getElementById('message-btn');
  const msgBox = document.getElementById('message-box');
  const closeBtn = document.getElementById('close-btn');

  // أحداث الضغط
  if (msgBtn && msgBox && closeBtn) {
    msgBtn.addEventListener('click', () => {
      msgBox.classList.add('show'); 
      msgBtn.classList.remove('show'); 
    });

    closeBtn.addEventListener('click', () => {
      msgBox.classList.remove('show'); 
    });
  }
};