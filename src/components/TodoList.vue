  <template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="index">
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
  props: ['todoItems'],
  methods: {
    removeTodo: function (todoItem, index) {
      this.$emit("removeOneItem", todoItem, index)
    },
    toggleComplete: function (todoItem) {
      this.$emit("toggleItem", todoItem)
    },
  },
};
</script>

<style></style>
