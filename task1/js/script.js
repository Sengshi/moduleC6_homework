const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', (e) => {
  e.target.closest('.btn').classList.toggle('btn_icon--toggle');
});