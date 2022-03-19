<template>
  <section>
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <button @click="addTodo">add todo</button>
    <modal-comp v-if="showModal">
      <h3 slot="header">경고</h3>
      <h5 slot="body">글 적으셈</h5>
      <p slot="footer">
          <button class="modal-default-button" @click="showModal = false"></button>
      </p>
    </modal-comp>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
  </section>
</template>

<script>
import ModalComp from "./common/ModalComp.vue";

export default {
  components: {
    ModalComp,
  },
  data: function () {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== "") {
        this.$store.commit('addTodoItem', this.newTodoItem)
        this.clearInput();
        return
      }

      this.showModal = !this.showModal
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
};
</script>

<style></style>
