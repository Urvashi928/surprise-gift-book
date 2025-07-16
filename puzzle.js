const heart = document.getElementById('heart');
const dropzone = document.getElementById('dropzone');

heart.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', 'heart');
});

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  if (data === 'heart') {
    dropzone.innerHTML = '✨ Magic Unlocked! ✨';
    dropzone.style.background = '#f3d7ff';
    setTimeout(() => {
      window.location.href = 'storybook.html';
    }, 1500);
  }
});
