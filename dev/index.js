import Vue from 'vue'
import Lazy from '../src/vue-lazy-component';
import App from './app';

Vue.use(Lazy);

new Vue({
    el: '#app',
    components: { App }
});
