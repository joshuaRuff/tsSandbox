let myTodo = {
  title: 'Trash',
  text: 'Take out trash'
}

// object as param
function showTodo(todo: {title: string, text: string}) {
  console.log(todo.title + ' ' + todo.text);
}

showTodo(myTodo);


// interface (custom type) as param
interface Todo {
  title: string;
  text: string;
}

function showInterfaceTodo(todo: Todo) {
  console.log(todo.title + ' ' + todo.text);
}

showInterfaceTodo(myTodo);

