<template>
  <div class="edit-form">
    <input type="text" v-bind:value="message" v-on:input="doUpdate">
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message() { return this.$store.getters.message }
  },
  methods: {
    doUpdate() {
      // inputの値を持ってdispatch(アクション'doUpdate'を呼び出す)
      this.$store.dispatch('doUpdate', event.target.value)
    }
  }
}
</script>
