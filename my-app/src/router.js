import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue'
import Product from '@/views/Product.vue'
import ProductHome from '@/views/Product/Home.vue'
import ProductReview from '@/views/Product/Review.vue'
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue'

// プラグイン登録
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/product',
            component: ProductList
        },
        {
            path: '/product/:id',
            component: Product,
            props: route => ({ id: Number(route.params.id) }), // パラメータをpropsとしてコンポーネントに渡す
            children: [
                {
                    name: 'product-home',
                    path: '',
                    component: ProductReview
                },
                {
                    name: 'product-review',
                    path: 'review',
                    component: ProductReview
                },
                {
                    name: 'review-detail',
                    path: 'review/:rid',
                    component: ProductReviewDetail,
                    props: route => ({
                        rid: Number(route.params.rid)
                    })
                }
            ]
        },
    ]
})

export default router
