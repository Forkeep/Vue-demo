import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import NavLayout from '@/components/NavLayout.vue';
Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('NavLayout', NavLayout);
new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map