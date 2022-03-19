  <template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in this.$store.state.todoItems" :key="index">
        <span
          @click="toggleComplete(todoItem)"
          :class="{ textComplete: todoItem.complete }"
          >완료</span
        >
        {{ todoItem.item }}
        <span @click="removeTodo(todoItem, index)">X</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    removeTodo: function (todoItem, index) {
      this.$store.commit('removeOneItem', {todoItem, index})
    },
    toggleComplete: function (todoItem) {
      this.$store.commit('toggleItem', todoItem)
    },
  },
};
</script>

<style></style>
