/*
import Vue from 'vue'
import App from './components/app.vue'

new Vue({
    el: 'body',
    components:{App}
});*/

import  Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//路由模块和http 模块
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    hashbang: false
});
router.map({
    '/index':{
        component:App
    }
});

router.redirect({
    '*': '/index'
});

router.start(App,'#app');