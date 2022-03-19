<template>
  <div id="app">
    <todo-header />
    <todo-input />
    <todo-list />
    <todo-footer @clearItems="clearItems" />
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
    return {}
  },
  methods: {
    clearItems: function () {
      localStorage.clear();
      this.todoItems = [];
    },
  }
};
</script>
