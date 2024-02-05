let i = 0;
const container = document.querySelector('#container');
while (i < 256) {
    const div = document.createElement('div');
    div.textContent = i + 1;
    container.appendChild(div);
    i++;
};