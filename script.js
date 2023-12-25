document.getElementById('add-button').addEventListener('click', function() {
    var todoInput = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-list');
  
    if (todoInput.value !== '') {
      var newTodo = document.createElement('li');
      newTodo.innerHTML = '<input type="checkbox"><span>' + todoInput.value + '</span>';
      todoList.appendChild(newTodo);
      todoInput.value = '';
    }
  });
  