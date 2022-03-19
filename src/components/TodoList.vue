  <template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in this.storeTodoItems" :key="index">
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
import {mapGetters} from 'vuex'

export default {
  computed: {
    // todoItems(){
    //   return this.$store.getters.storeTodoItems
    // }
    ...mapGetters(["storeTodoItems"])
  },
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
