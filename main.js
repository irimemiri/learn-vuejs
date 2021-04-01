var outer = { message: 'Hello from outside of vue!' };

var app = new Vue({
    el: '#app',
    data: {
        budget: 300,
        limit: 2,
        list: [
            {id: 1, name: 'りんご', price: 100},
            {id: 2, name: 'バナナ', price: 200},
            {id: 3, name: 'いちご', price: 400},
            {id: 4, name: 'オレンジ', price: 300},
        ],
        name: '',
        // scrollY: 0,
        // timer: null,
    },
    created: function() {
        this.$watch(function() {
                return Object.assign([], this.list)
            }, function(newVal, oldVal) {
            console.log('oldVal: ' + oldVal.length);
            console.log('newVal: ' + newVal.length);
        }, { deep: true });
    },
    computed: {
        matched: function() {
            console.log(this.list);
            return this.list.filter(function(elem){
                return elem.price <= this.budget;
            }, this);
        },
        limited: function() {
            return this.matched.slice(0, this.limit)
        },
        filteredList: function() {
            return this.limited;
        }
    },
    // watch: {
    //     list: {
    //         handler: function(newVal, oldVal) {
    //             console.log('oldVal: ' + oldVal.length);
    //             console.log('newVal: ' + newVal.length);
    //         },
    //         deep: true
    //     },
        // limit: {
        //     handler: function(newVal, oldVal) {
        //         console.log('old limit' + oldVal);
        //         console.log('new limit' + newVal);
        //     }
        // }
    // }
    // created: function() {
    //     // スクロールはwindowのイベントなのでv-onが使えない
    //     window.addEventListener('scroll', this.handleScroll);

    //     axios.get('list.json').then(function(response) {
    //         this.list = response.data;
    //     }.bind(this)).catch(function(e) {
    //         console.error(e);
    //     });
    // },
    // beforeDestroy: function() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // },
    // methods: {
    //     handleScroll: function() {
    //         if (this.timer === null) {
    //             this.timer = setTimeout(function() {
    //                 this.scrollY = window.scrollY;
    //                 clearTimeout(this.timer);
    //                 this.timer = null;
    //             }.bind(this), 200);
    //         }
    //     },
    //     addMonster: function() {
    //         var max = this.list.reduce(function(a, b) {
    //             return a > b.id ? a : b.id;
    //         }, 0);
    //         this.list.push({
    //             id: max + 1,
    //             name: this.name,
    //             hp: 500
    //         });
    //     },
    //     deleteMonster: function(index, event) {
    //         console.log(event);
    //         this.list.splice(index, 1);
    //     },
    //     doAttack: function(index) {
    //         this.list[index].hp -= 10;
    //     }
    // }
});
