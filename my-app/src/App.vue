<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>
    <router-view />
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
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.router-link-active {
  background-color: skyblue;
}
</style>
