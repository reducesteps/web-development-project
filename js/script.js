document.addEventListener('DOMContentLoaded', function() {
  // Initialize game variables
  let playerHand = [];
  let dealerHand = [];
  let deck = [];

  // Initialize game elements
  const gameContainer = document.getElementById('game-container');

  // Create deck
  function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    for (let suit of suits) {
      for (let value of values) {
        deck.push({ suit, value });
      }
    }
  }

  // Shuffle deck
  function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  // Draw card
  function drawCard(hand) {
    const card = deck.pop();
    hand.push(card);
  }

  // Initialize game
  createDeck();
  shuffleDeck();
  drawCard(playerHand);
  drawCard(dealerHand);

  // Display initial hands
  gameContainer.innerHTML = `<div>Player Hand: ${JSON.stringify(playerHand)}</div>`;
  gameContainer.innerHTML += `<div>Dealer Hand: ${JSON.stringify(dealerHand)}</div>`;
});