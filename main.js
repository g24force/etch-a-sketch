let i = 1;
let columns = 16;
let flexBasisAddValue = Math.floor(1 / columns * 100) + "%";
const container = document.querySelector('#container');
while (i <= 16 * 16) {
    const div = document.createElement('div');
    /* div.textContent = i; */
    div.style.flexBasis = flexBasisAddValue;
    div.classList.add('cell');
    container.appendChild(div);
    i++;
};

const button = document.querySelector('button')

let size = 0;

button.addEventListener('click', () => {
    size = window.prompt("How many lines of squares do you want on your new grid?", 10);
});