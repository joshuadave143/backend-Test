require('./bootstrap');

import vuetify from './plugins/vuetify'

window.Vue = require('vue').default;

Vue.component('youtube', require('./components/youtube.vue').default);

const app = new Vue({
    el:'#app',
    vuetify
})
