/**
 * Вводим селектор, который существует на странице и нажимаем на одну из кнопок
 * При нажатии на кнопку .find
 * 1. Подсвечивается(используйте класс selected) первый элемент на странице, удовлетворяющий условию
 * 2. Если у элемента есть родитель, то разблокируется кнопка parent
 * 3. Если у элемента есть дети, то разблокируется кнопка child
 * 4. При нажатии на кнопку child убирается выделение с нашего элемента и ставится на ребенка.
 *    Теперь он наш активный элемент
 * 5. Тот же принцип с parent
 * 6. Если наш новый элемент не имеет родителя или ребенка, то соответствующие кнопки блокируются :)
 *
 * При нажатии на кнопку find all
 * 1. Подсвечиваются все элементы, удовлетворяющие селектору
 * 2. Кнопки parent, child - не доступны
 */

const findBtn = document.querySelector(".find");
const findAllBtn = document.querySelector(".find-all");
const childBtn = document.querySelector(".child");
const parentBtn = document.querySelector(".parent");
const inputElement = document.querySelector("#selector-finder");

let element;

function setActiveElement(elem) {
  elem.classList.add("selected");
  childBtn.disabled = !elem.firstElementChild;
  parentBtn.disabled = !elem.parentElement;
}

function resetSelections() {
  const elements = document.querySelectorAll(".selected");

  elements.forEach(element => {
    element.classList.remove("selected");
  });
}

function onFindOneClick() {
  resetSelections();

  element = document.querySelector(inputElement.value);
  if (!element) {
    alert("Incorrect selector");
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
    element.classList.remove("selected");
  }

  element = element.parentElement;
  setActiveElement(element);
}

findBtn.addEventListener("click", onFindOneClick);
findAllBtn.addEventListener("click", onFindAllClick);
parentBtn.addEventListener("click", onFindParentClick);
