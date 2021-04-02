Vue.component('comp-child', {
    template: '<li>{{ name }} HP. {{ hp }} <button v-on:click="doAttack">攻撃！</button></li>',
    props: ['name', 'hp'],

    methods: {
        doAttack: function() {
            // 親のリアクティブデータを勝手に更新することはできない(動くけれどwarn)
            // this.hp -= 10;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ぶちスライム', hp: 200 },
            { id: 3, name: 'キングスライム', hp: 500 }
        ]
    }
});
