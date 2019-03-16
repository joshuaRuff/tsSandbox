var myTodo = {
    title: 'Trash',
    text: 'Take out trash'
};
// object as param
function showTodo(todo) {
    console.log(todo.title + ' ' + todo.text);
}
showTodo(myTodo);
function showInterfaceTodo(todo) {
    console.log(todo.title + ' ' + todo.text);
}
showInterfaceTodo(myTodo);
