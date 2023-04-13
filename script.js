// Define variables
const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let todos = [];

// Add event listeners
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);

// Function to add a new todo
function addTodo() {
    const todoText = newTodoInput.value.trim();
    if (todoText === '') return;
    const todo = { id: Date.now(), text: todoText };
    todos.push(todo);
    renderTodos();
    newTodoInput.value = '';
}

// Function to delete a todo
function deleteTodo(event) {
    if (event.target.classList.contains('delete-btn')) {
        const todoId = Number(event.target.parentElement.getAttribute('data-todo-id'));
        todos = todos.filter(todo => todo.id !== todoId);
        renderTodos();
    }
}

// Function to render todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.setAttribute('data-todo-id', todo.id);
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML = `
      <span>${todo.text}</span>
      <button type="button" class="btn btn-sm delete-btn">&times;</button>
    `;
        todoList.appendChild(li);
    });
}
