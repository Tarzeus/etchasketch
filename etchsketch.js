const container = document.querySelector('#container');
let cell = [];

let number = 16;
let numberOfPixels = number*number; 

let sizeOfCanvas = 500;
let sizeOfPixels = sizeOfCanvas / number;

let resetButton;

resetButton = document.getElementById('reset');
resetButton.addEventListener('click', changeGridSize);
resetButton.addEventListener('click', setGridSize);

setGridSize();
function setGridSize () {
    sizeOfPixels = sizeOfCanvas / number;
    for (let i = 0; i < numberOfPixels; i++) {

        cell[i] = document.createElement('div');
        cell[i].classList.add('cell');

        cell[i].style.width = sizeOfPixels + 'px';
        cell[i].style.height = sizeOfPixels + 'px';

        cell[i].addEventListener('mouseover', blackColor);
        container.appendChild(cell[i]);
}}

function changeGridSize () {
    for (let i = 0; i < numberOfPixels; i++) {
        cell[i].remove();
    }do {
        number = prompt('Select grid size (1-100)');
    } while (number < 1 || number > 100);
    numberOfPixels = number*number;
}

function blackColor() {
  this.style.backgroundColor = 'black';
}

function rainbowColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  this.style.backgroundColor = bgColor;
}
