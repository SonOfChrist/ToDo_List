const todoList = [{ name: 'make dinner', dueDate: '2025-06-12', completed: true },
                  { name: 'wash the car', dueDate: '2025-06-13', completed: false}
                 ]; // Initial todo list with two items

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
   dateInputElement.value = ''; 
   renderToDoList();
}



// Function to display error messages
function displayErrorMessage(message) {
   const errorMessageElement = document.querySelector('.js-error-message');
   errorMessageElement.textContent = message;
   errorMessageElement.style.display = 'block';
   setTimeout(() => {
      errorMessageElement.style.display = 'none';
   }, 3000);
}
// Function to display success messages
function displaySuccessMessage(message) {
   const successMessageElement = document.querySelector('.js-success-message');
   successMessageElement.textContent = message;
   successMessageElement.style.display = 'block';
   setTimeout(() => {
      successMessageElement.style.display = 'none';
   }, 3000);
}
// Function to validate the todo item
function validateTodoItem(name, dueDate) {
   if (!name || !dueDate) {
      displayErrorMessage('Please fill in both fields.');
      return false;
   }
   const today = new Date();
   const dueDateObject = new Date(dueDate);
   if (dueDateObject < today) {
      displayErrorMessage('Due date cannot be in the past.');
      return false;
   }
   return true;
}
