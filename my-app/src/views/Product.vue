<template>
  <div class="product">
    <h1>商品情報</h1>
    <p>このページには ID.{{ id }} の商品詳細を表示する</p>
  </div>
</template>

<script>
export default {
  props: { id: Number }
}
</script>
