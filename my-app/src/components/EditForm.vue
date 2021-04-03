<template>
  <div class="edit-form">
    <input type="text" v-model="message">
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message: {
      get() { return this.$store.getters.message },
      // inputの値を持ってdispatch(アクション'doUpdate'を呼び出す)
      set() { this.$store.dispatch('doUpdate', event.target.value) }
    },
  },
  methods: {
  }
}
</script>
