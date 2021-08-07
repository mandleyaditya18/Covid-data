<template>
  <div>
    <h1>Hello World</h1>
    
    <StateTable></StateTable>
  </div>
</template>

<script>
import StateTable from './components/States/StateTable.vue';

export default {
  components: {
    StateTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>