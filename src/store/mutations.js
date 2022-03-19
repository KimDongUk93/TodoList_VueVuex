const addTodoItem = function (state, newTodoItem) {
    const obj = {
        complete: false,
        item: newTodoItem,
    };
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = function (state, payload) {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}

const toggleItem = function (state, todoItem) {
    todoItem.complete = !todoItem.complete;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}

export { addTodoItem, removeOneItem, toggleItem }