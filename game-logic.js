// Define the quotes to type
const quotes = [
  "The quick brown fox jumps over the lazy dog",
  "The greatest glory in living lies not in never falling, but in rising every time we fall",
  "The way to get started is to quit talking and begin doing",
  "If life were predictable it would cease to be life, and be without flavor",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough"
];

// Get DOM elements
const quoteElement = document.querySelector('.quote');
const inputBox = document.querySelector('.input-box');
const timerElement = document.querySelector('.timer');
const wpmElement = document.querySelector('.wpm');
const accuracyElement = document.querySelector('.accuracy');
const startButton = document.querySelector('.start-button');
const resetButton = document.querySelector('.reset-button');

// Define game variables
let currentQuote = "";
let quoteIndex = 0;
let wordCount = 0;
let errorCount = 0;
let timer = 0;
let intervalId;
let isPlaying = false;

// Function to start the game
function startGame() {
  // Set the current quote and display it
  currentQuote = quotes[quoteIndex];
  quoteElement.textContent = currentQuote;

  // Set up the game variables
  timer = 0;
  wordCount = 0;
  errorCount = 0;
  isPlaying = true;

  // Highlight the first word
  const words = currentQuote.split(" ");
  const firstWord = words[0];
  quoteElement.innerHTML = currentQuote.replace(firstWord, `<span class="highlight">${firstWord}</span> `);

  // Start the timer
  intervalId = setInterval(() => {
    timer++;
    timerElement.textContent = timer;
  }, 1000);

  // Hide the start button and show the input box
  startButton.style.display = "none";
  inputBox.style.display = "block";

  // Set the focus on the input box
  inputBox.focus();
}

// Function to reset the game
function resetGame() {
  // Stop the timer
  clearInterval(intervalId);

  // Reset the game variables
  currentQuote = "";
  quoteIndex = 0;
  wordCount = 0;
  errorCount = 0;
  timer = 0;
  isPlaying = false;

  // Reset the DOM elements
  quoteElement.innerHTML = "";
  inputBox.value = "";
  timerElement.textContent = "0";
  wpmElement.textContent = "0";
  accuracyElement.textContent = "0";
  startButton.style.display = "block";
  inputBox.style.display = "none";
}

// Function to handle the input box
function handleInput() {
  // Get the typed text and split it into words
  const inputText = inputBox.value.trim();
  const typedWords = inputText.split(" ");

  // Get the current word and the next word
  const currentWord = typedWords[typedWords.length - 1];
  const expectedWords = currentQuote.split(" ");
  const expectedWord = expectedWords[typedWords.length - 1];

  // Check for errors
  if (currentWord !== expectedWord) {
    // Add an error class to the input box
    inputBox.classList.add("error");

    // Increment the error count
    errorCount++;
  } else {
    // Remove the error class from the input box
    inputBox.classList.remove("error");

    // Highlight the next word
    const nextWord
