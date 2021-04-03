Vue.component('slot-test', {
    template: '<div class="slot-test-comp"><header><slot name="header">ヘッダーデフォルト</slot></header><p><slot>デフォルト</slot></p></div>'
})

Vue.component('comp-child', {
    template: '<li>{{ name }} HP. {{ hp }} <button v-on:click="doAttack">攻撃！</button></li>',
    props: {
        id: Number,
        name: String,
        hp: Number
    },
    methods: {
        doAttack: function() {
            this.$emit('attack', this.id);
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
    },
    methods: {
        handleAttack: function(id,e) {
            // 最初こう書いたけどこれだとダメだった
            // this.hp -= 10;
            var item = this.list.find(function(el) {
                return el.id === id;
            });
            if (item !== undefined && item.hp > 0) item.hp -= 10;
        }
    }
});
