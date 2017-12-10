/**
 * Вводим селектор, который существует на странице и нажимаем на одну из кнопок
 * При нажатии на кнопку .find
 * 1. Подсвечивается(используйте класс selected) первый элемент на странице, удовлетворяющий условию
 * 2. Если у элемента есть родители/дети/предыдущие/следующие соседи, то разблокируются соответствующие кнопки(parent, child, previous/next sibling)
 * 3. Если нет, то они должны остаться заблокрованными
 * 4. При нажатии на одну из 4х кнопок, убирается выделение с нашего элемента и ставится на соответствующий кнопке.
 *    Теперь он наш активный элемент
 * 5. При новом поиске старые выделения должны быть удалены.
 *
 * При нажатии на кнопку find all
 * 1. Подсвечиваются все элементы, удовлетворяющие селектору
 * 2. 4 кнопки навигации не доступны
 */

const findBtn = document.querySelector('.find');
const findAllBtn = document.querySelector('.find-all');
const childBtn = document.querySelector('.child');
const parentBtn = document.querySelector('.parent');
const inputElement = document.querySelector('#selector-finder');

let element;

function setActiveElement(elem) {
  elem.classList.add('selected');
  childBtn.disabled = !elem.firstElementChild;
  parentBtn.disabled = !elem.parentElement;
}

function resetSelections() {
  const elements = document.querySelectorAll('.selected');

  elements.forEach(element => {
    element.classList.remove('selected');
  });
}

function onFindOneClick() {
  resetSelections();

  element = document.querySelector(inputElement.value);
  if (!element) {
    alert('Incorrect selector');
    return;
  }

  // if (element.firstElementChild) {
  //   childBtn.disabled = false;
  // } else {
  //   childBtn.disabled = true;
  // }

  // childBtn.disabled = element.firstElementChild ? false : true;

  setActiveElement(element);
}

function onFindAllClick() {
  resetSelections();
  const elements = document.querySelectorAll(inputElement.value);

  elements.forEach(element => {
    setActiveElement(element);
  });
}

function onFindParentClick() {
  if (element) {
    element.classList.remove('selected');
  }

  element = element.parentElement;
  setActiveElement(element);
}

findBtn.addEventListener('click', onFindOneClick);
findAllBtn.addEventListener('click', onFindAllClick);
parentBtn.addEventListener('click', onFindParentClick);
