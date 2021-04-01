Vue.filter('localeNum2', function(val){
    return val.toLocaleString();
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
