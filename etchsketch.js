//Create title element.
let title = document.createElement('h1');
title.setAttribute('id', 'title');
title.textContent = 'Etch A Sketch';
document.body.appendChild(title);

//Create main container for grid.
let container = document.createElement('div');
container.setAttribute('id', 'container');
container.textContent = 'put my grid in here';
document.body.appendChild(container);

//create 16 x 16 grid rows and columns(difficult).
function defaultGrid(){
    createRows(16);
    createColumns(16);
}

function createRows(rows){
    for (i = 0; i < rows; i++){
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    }
}

function createColumns(columns){
    for (j = 0; j < columns; j++){
        let column = document.createElement('div');
        container.appendChild(column).className = 'gridColumn';
    }
}

//??????????????????????????????

console.log(defaultGrid());