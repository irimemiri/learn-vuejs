Vue.filter('localeNum2', function(val){
    return val.toLocaleString();
});

// var myComponent = {
//     template: '<p>MyComponent</p>'
// };

Vue.component('my-component', {
    template: '<p>{{ message }}</p>',
    data: function() {
        return {
            message: 'Hello, Vue.js!'
        }
    },
    methods: {
        hoge: function() {
            return 'hoge';
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        list: [],
        current: '',
        topics: [
            { value: 'vue', name: 'Vue.js' },
            { value: 'jQuery', name: 'jQuery' }
        ],
        price: 12800
    },
    created: function() {
    },
    // components: {
    //     'my-component': myComponent
    // },
    directives: {
        focus: {
            inserted: function(el) {
                el.focus();
            }
        }
    },
    filters: {
        localeNum: function(val) {
            return val.toLocaleString();
        }
    },
    watch: {
        current: function(val) {
            axios.get('https://api.github.com/search/repositories', {
                params: { q: 'topic:' + val }
            }).then(function(response) {
                this.list = response.data.items
            }.bind(this));
        }
    }
});
