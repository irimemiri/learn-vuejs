import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue'
import Product from '@/views/Product.vue'

// プラグイン登録
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { name: 'home', path: '/', component: Home},
        { name: 'product-list', path: '/product', component: ProductList },
        { name: 'product', path: '/product/:id', component: Product, props: route => ({ id: Number(route.params.id) }) } // パラメータをpropsとしてコンポーネントに渡す
    ]
})

export default router
