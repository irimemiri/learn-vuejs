Vue.component('test-comp', {
    template: '<p>test</p>',
});

Vue.component('comp-child', {
    template: '<p>{{ hoge }}</p>',
    data: function(){
       return { hoge: 'データはオブジェクトを返す関数じゃないといけないらしい' }
    },
    props: ['val']
});

var app = new Vue({
    el: '#app',
    data: {
    }
});
