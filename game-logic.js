// get the text to type
const quote = document.querySelector('.quote').textContent.trim();

// start the game
let timer = 0;
let intervalId;
let isPlaying = false;
let wordCount = 0;
let errorCount = 0;
const inputBox = document.querySelector('.input-box');
const timerDisplay = document.querySelector('.timer');
const wpmDisplay = document.querySelector('.wpm');
const accuracyDisplay = document.querySelector('.accuracy');
inputBox.addEventListener('keydown', (e) => {
  // start the timer if it's not running
  if (!isPlaying) {
    isPlaying = true;
    intervalId = setInterval(() => {
      timer++;
      timerDisplay.textContent = timer;
    }, 1000);
  }

  // calculate WPM and accuracy
  const inputText = inputBox.value.trim();
  if (inputText.endsWith(' ')) {
    wordCount++;
    inputBox.value = '';
    const typedWords = inputText.split(' ');
    const typedChars = typedWords.reduce((acc, curr) => acc + curr.length, 0);
    const accuracy = ((typedChars - errorCount) / typedChars) * 100;
    accuracyDisplay.textContent = accuracy.toFixed(1);
    const wpm = (wordCount / timer) * 60;
    wpmDisplay.textContent = wpm.toFixed(1);
  }
});
