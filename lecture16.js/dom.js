// slick
const carousel = $('.carousel');
carousel.slick({
  "slidesToShow": 4,
  "slidesToScroll": 4
});

// drag and drop
const draggable = $('.draggable');
let isDragging = false;

function onMouseDown(event) {
    isDragging = true;
}

function onMouseMove(event) {
    if (isDragging) {
        console.log(event)
        const element = event.target;
        element.style.top = `${event.pageY}px`;
        element.style.left = `${event.pageX}px`;
    }
}

function onMouseUp(event) {
    isDragging = false;
}

draggable.on('mousedown', onMouseDown);
draggable.on('mousemove', onMouseMove);
draggable.on('mouseup', onMouseUp);

// events
const button = document.querySelector('.btn');

function makeRed(event) {
  button.style.backgroundColor = 'red';
  const reaction = prompt('You sure?');
}

function makeGreen(event) {
  event.target.style.backgroundColor = 'green';
}

function reset(event) {
  event.target.style.backgroundColor = '';
}

button.addEventListener('click', makeRed);
button.addEventListener('mouseover', makeGreen);
button.addEventListener('mouseout', reset);

