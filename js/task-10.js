function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');

createButton.addEventListener('click', () => createBoxes(input.value));
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const element = document.createElement('div')

    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;
    element.style.backgroundColor = getRandomHexColor();

    elements.push(element);
  };
  boxes.append(...elements);
};

function destroyBoxes() {
  boxes.innerHTML = '';
};
