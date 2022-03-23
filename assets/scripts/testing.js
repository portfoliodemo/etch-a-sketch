

const grid = document.getElementById('grid-container');
const reset = document.getElementById('reset');
let columns = 16;
let rows = 16;

// Add button listener to reset the grid
reset.addEventListener('click', resetGrid);

// Create a webpage with a 16 x 16 grid of square divs using JavaScript
for (let i = 0; i < (columns * rows); i++) {
    const cell = document.createElement('div');
    cell.style.backgroundColor = 'lightgrey';
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = setBackgroundColor();
        // cell.style.setProperty('filter', 'brightness(90%)');
    });
    // cell.addEventListener('mouseleave', () => {
    //     cell.style.backgroundColor = 'white';
    // });
    grid.appendChild(cell).className = 'grid-item';
}

// Create a function to reset the grid
function resetGrid() {
    const eraseCell = document.querySelectorAll('.grid-item');
    for (let i = 0; i < eraseCell.length; i++) {
        eraseCell[i].style.backgroundColor = 'lightgrey';
    }
}

// Random color generator courtesy of CSS-Tricks
// https://css-tricks.com/re-pleasing-color-palettes/
const setBackgroundColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

// Create a 16 x 16 grid initially
// function createGrid(rows, cols) {
//     // Set the row and column custom CSS variables
//     grid.style.setProperty('--grid-rows', rows);
//     grid.style.setProperty('--grid-columns', cols);
//     for (i = 0; i < (rows * cols); i++) {
//         let cell = document.createElement('div');
//         grid.appendChild(cell).className = 'grid-item';
//     };
// }

// createGrid(16, 16);