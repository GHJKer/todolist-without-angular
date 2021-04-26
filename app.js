
let inputForm = document.querySelector('.input-form');
let todoList = document.querySelector('.todo-list');
let todoInput = document.querySelector('.todo-input');
let button = document.querySelector('.button');
let listItem = document.querySelector('.todo-item');


/* button.onclick = function () {
    let newList = document.createElement('li');
    newList.classList.add('todo-item');
    todoList.append(newList);
    let spanItem = document.createElement('span');
    spanItem.classList.add('span-item');
    spanItem.textContent = todoInput.value;
    newList.append(spanItem);

    let listButton = document.createElement('button');
    listButton.classList.add('list-button');
    listButton.textContent = 'Done!';
    newList.append(listButton);

    listButton.onclick = function () {
        newList.remove()
    };
}; второй вариант, есть рабочее удаление */

button.onclick = function () {
    todoList.append(
        createRowElement(),
    );
};

function createRowElement () {
    let row = createElement('li', 'todo-item');
    let checkbox = createElement('input', 'input-item');
    let spanItem = createElement('span', 'span-item');
    let removeButton = createElement('button', 'list-button');

    checkbox.setAttribute('type', 'checkbox');
    spanItem.textContent = todoInput.value;
    removeButton.textContent = 'Remove!';

    row.append(spanItem);
    row.append(checkbox);
    row.append(removeButton);

    removeButton.onclick = function () {
        row.remove()
    };

    checkbox.addEventListener('change', () => {
        spanItem.classList.toggle('linethrough')
    });
// предыдущие 3 строки добавляют класс linethrough
    /* function handler1() {
        row.remove()
    };

    checkbox.addEventListener('change', handler1); */
// предыдущие 5 строк удаляют row при изменении checkbox
    return row;
};

function createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}