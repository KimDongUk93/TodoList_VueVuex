import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const storage = {
    fetch() {
        const arr = [];

        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                const localStorageItems = localStorage.getItem(localStorage.key(i));
                const parsedData = JSON.parse(localStorageItems);
                arr.push(parsedData);
            }
        }

        return arr
    }
}


export const store = new Vuex.Store({
    state: {
        headerText: "Hello World!",
        todoItems: storage.fetch()
    },
    getters: {
        storeTodoItems(state){
            return state.todoItems
        }
    },
    mutations: {
        addTodoItem: function (state, newTodoItem) {
            const obj = {
                complete: false,
                item: newTodoItem,
            };
            localStorage.setItem(newTodoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem: function (state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleItem: function (state, todoItem) {
            todoItem.complete = !todoItem.complete;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
    }
}) 