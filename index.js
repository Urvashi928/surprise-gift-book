// index.js — Popup Logic

window.onload = () => {
  // Show loading screen for 3 seconds, then show first popup
  setTimeout(() => {
   document.getElementById('loader').style.display = 'none'
    document.getElementById('popup1').classList.add('show');
  }, 3000);
};

function showPopup2() {
  document.getElementById('popup1').classList.remove('show');
  document.getElementById('popup2').classList.add('show');
}

function handleAnswer(answer) {
  document.getElementById('popup2').classList.remove('show');
  if (answer === 'yes') {
    document.getElementById('popup4').classList.add('show');
  } else {
    document.getElementById('popup3').classList.add('show');
  }
}

function goBackToLoveQuestion() {
  document.getElementById('popup3').classList.remove('show');
  document.getElementById('popup2').classList.add('show');
}

function goToPuzzle() {
  window.location.href = 'puzzle.html';
}
