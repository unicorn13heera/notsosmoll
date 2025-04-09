const blob = document.getElementById('blob');
const message = document.getElementById('message');
let score = 0;
let misses = 0;
let gameRunning = false;

// Show game when start button is clicked
document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('greeting-container').style.display = 'none';
  document.getElementById('game-section').style.display = 'block';
  startGame();
});

function startGame() {
  gameRunning = true;

  const interval = setInterval(() => {
    if (!gameRunning) return clearInterval(interval);
    moveBlob();
    misses++;

    if (misses >= 10) {
      endGame("Oops! You missed too many times 🥲\nI miss you guys :(");
    }
  }, 1000);
}

// When blob is clicked
blob.addEventListener('click', () => {
  score++;

  // Animate blob
  blob.classList.add('clicked');
  setTimeout(() => {
    blob.classList.remove('clicked');
  }, 400);

  if (score >= 5) {
    endGame("Yay! You clicked the blob! 🥹\nI miss you guys :(");
  }
});

function moveBlob() {
  const container = document.getElementById('game-container');
  const maxX = container.clientWidth - 80;
  const maxY = container.clientHeight - 80;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  blob.style.left = `${randomX}px`;
  blob.style.top = `${randomY}px`;
}

function endGame(text) {
  gameRunning = false;
  blob.style.display = 'none';
  message.innerText = text;
}
