<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import EditForm from '@/components/EditForm'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    EditForm
  },
  created() {
  },
  computed: {
    message() { return this.$store.getters.message }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
