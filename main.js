// Array, Looping, Objects, generating Html, 
const todoList = [{
   name: 'make dinner',
   dueDate: '2024-11-15'
}];

renderToDoList();

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
   addTodo();
});

function renderToDoList(){
   let todoListHTMl = '';

      todoList.forEach((todoObject, index) => {
         const { name, dueDate } = todoObject;
         const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button> 
               `;
         todoListHTMl += html;
   });

      document.querySelector('.js-todo-list').innerHTML = todoListHTMl;

      document.querySelectorAll('.js-delete-todo-button', ).forEach((deleteButton, index) => {
         deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderToDoList();
         });
      });
}
function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;
   todoList.push({name, dueDate});
   inputElement.value = '';
   renderToDoList();
}