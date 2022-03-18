<template>
  <section>
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <button @click="addTodo">add todo</button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">custom header</h3>
    </modal>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
  </section>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  components: {
    Modal,
  },
  data: function () {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== "") {
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
};
</script>

<style></style>
