
// Get the grid container 
const grid = document.getElementById('grid-container');
console.log(grid);
// Create a 16 x 16 grid initially
function createGrid(rows, cols) {
    // Set the row and column custom CSS variables
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-columns', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
    };
}

createGrid(16, 16);