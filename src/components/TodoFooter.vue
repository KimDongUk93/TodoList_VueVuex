<template>
  <footer>
      <button @click="clearTodo">Clear</button>
  </footer>
</template>

<script>
export default {
  methods: {
    clearTodo: function(){
      this.$emit("clearItems")
    }
  }
}
</script>

<style>

</style>