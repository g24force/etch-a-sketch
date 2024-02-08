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