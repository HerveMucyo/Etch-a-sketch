const container = document.querySelector('.container');
const button = document.querySelector('button');

// Create initial grid
createGrid();

function createGrid() {
    // Prompt the user for the number of squares per side
    const squaresPerSide = prompt('Enter the number of squares per side (maximum 100):');
    const gridSize = squaresPerSide * squaresPerSide;

    // Clear existing grid
    container.innerHTML = '';

    // Set container size based on number of squares per side
    container.style.width = `${25 * squaresPerSide}px`;

    // Create and append square divs
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    // Add event listeners for hover effect
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', changeColor);
    });
}

function changeColor(event) {
    const square = event.target;
    const currentColor = square.style.backgroundColor;
    const isRgbColor = currentColor.startsWith('rgb');

    if (isRgbColor) {
        const rgbValues = currentColor.match(/\d+/g);
        let [r, g, b] = rgbValues.map((value) => parseInt(value));

        // Randomize RGB values
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);

        // Progressive darkening effect
        const darkenFactor = 0.1;
        r = Math.floor(r * (1 - darkenFactor));
        g = Math.floor(g * (1 - darkenFactor));
        b = Math.floor(b * (1 - darkenFactor));

        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        square.style.backgroundColor = 'rgb(0, 0, 0)';
    }
}