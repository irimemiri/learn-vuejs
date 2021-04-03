Vue.component('comp-board', {
    template: '<div>message board</div>',
});

Vue.component('comp-form', {
    template: '<div>form<textarea v-model="message"></textarea></div>',
    data: function() {
        return { message: '' }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        current: 'comp-board',
        show: true,
        count: 0
    }
});
