<template>
  <section>
      <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
      <button @click="addTodo">add todo</button>
  </section>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
        addTodo: function() {
            if(this.newTodoItem !== ""){
                this.$emit("addTodoItem", this.newTodoItem)
                this.clearInput()
            }
        },
        clearInput: function(){
            this.newTodoItem = "";
        }
    }
}
</script>

<style>

</style>