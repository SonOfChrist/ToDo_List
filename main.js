const todoList = [{
   name: 'make dinner',
   dueDate: '2024-8-19'
}, {
   name:'wash dishes',
   dueDate: '2024-8-19'}];

renderToDoList();

function renderToDoList(){
   let todoListHTMl = '';

      for(let i = 0; i < todoList.length; i++){
         const todoObject = todoList[i];
         //const {name} = todoObject;
         const {name, dueDate} = todoObject;
         const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
               todoList.splice(${i}, 1)
               renderToDoList();
            " class="delete-todo-button">Delete</button> 
               `;
         todoListHTMl += html;
      }

      document.querySelector('.js-todo-list').innerHTML = todoListHTMl;
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