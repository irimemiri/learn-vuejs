<template>
  <div class="product-list">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="{ id, name } in list" v-bind:key="id">
        <router-link v-bind:to="`/product/${id}`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import products from '@/api/products.js'
export default {
  computed: {
    list: () => products.fetch()
  }
}
</script>
