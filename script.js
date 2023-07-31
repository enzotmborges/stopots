// Define the categories for the game
const categories = ['Fruit', 'Animal', 'Country', 'Color', 'Name'];

// Function to generate a random letter (A-Z)
function getRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Function to start the game and display categories with the random letter
function startGame() {
    const gameContainer = document.getElementById('game-container');
    const letter = getRandomLetter();

    gameContainer.innerHTML = '';

    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.textContent = `${category}: ${letter}`;
        gameContainer.appendChild(categoryElement);
    });
}

// Call the startGame function to begin the game
startGame();
