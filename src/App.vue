<template>
  <div id="app">
    <todo-header />
    <todo-input @addTodoItem="addTodoItem" />
    <todo-list :todoItems="todoItems" @removeOneItem="removeOneItem" @toggleItem="toggleItem"/>
    <todo-footer @clearItems="clearItems"/>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    addTodoItem: function (newTodoItem) {
      const obj = {
        complete: false,
        item: newTodoItem,
      };
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj)
    },
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleItem: function (todoItem) {
      todoItem.complete = !todoItem.complete;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearItems: function(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const localStorageItems = localStorage.getItem(localStorage.key(i));
        const parsedData = JSON.parse(localStorageItems);
        this.todoItems.push(parsedData);
      }
    }
  },
};
</script>
