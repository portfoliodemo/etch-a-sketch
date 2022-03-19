
// Get the grid container 
const grid = document.querySelector('main.grid-container');
// const root = document.querySelector(':root');
// console.log(root);

// const getColumns = getComputedStyle(root, '--grid-columns');
// console.log(getColumns);
//.setProperty.. 
// root.style.setProperty('--grid-columns');

// Create a webpage with a 16 x 16 grid

// Creates 16 grids.. now do this 16 times?
for (let i = 0; i < 16; i++) {
    const gridSquare = document.createElement('div');
    grid.appendChild(gridSquare);
    console.log(gridSquare);
}

// for (let i = 0; i < 16; i++) {
//     for (let j = 0; j < 16; j++) {
//         let gridSquare = document.createElement('div');
//         grid.appendChild(gridSquare);
//         console.log(gridSquare);
//     }
// }
