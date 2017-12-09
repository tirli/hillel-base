
const input = document.querySelector('#selector-finder');
const findOne = document.querySelector('.find');
const findAll = document.querySelector('.find-all');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

let element;

function onFindOneClick() {
  const value = input.value;
  element = document.querySelector(value);
  element.classList.add('selected');
  console.log(element, element.parentElement, element.childElement);
  parent.disabled = false;
  child.disabled = false;
}

function onFindAllClick() {
  const value = input.value;
  const elements = document.querySelectorAll(value);
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('selected');
  }

}

function onFindParentClick() {

}

function onFindChildClick() {

}


findOne.addEventListener('click', onFindOneClick);
findAll.addEventListener('click', onFindAllClick);
parent.addEventListener('click', onFindParentClick);
child.addEventListener('click', onFindChildClick);