// This is the main JavaScript file for the Todo List application
// It handles the rendering of the todo list and the addition of new todo items
const todoList = [{ name: 'make dinner', dueDate: '2025-06-12', completed: true },
                  { name: 'wash the car', dueDate: '2025-06-13', completed: false}];

renderToDoList();

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
   addTodo();
});

// Function to render the todo list on the page
function renderToDoList(){
   let todoListHTMl = '';

      todoList.forEach((todoObject, index) => {
         const { name, dueDate } = todoObject;             //Destructuring method
         const html = `
            <div>${name}</div>                  
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button> 
               `;
         todoListHTMl += html;
   });

      document.querySelector('.js-todo-list').innerHTML = todoListHTMl;

      document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
         deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderToDoList();
         });
      });
}
// Function to add a new todo item
function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;
   todoList.push({name, dueDate});           //shorthand propertysyntax
   inputElement.value = '';
   renderToDoList();
}