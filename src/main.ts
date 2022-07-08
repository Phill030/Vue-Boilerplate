import { createApp } from 'vue'
import FirstPage from './views/FirstPage.vue';
import Home from './views/Home.vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/firstpage', name: 'Firstpage', component: FirstPage },
    { path: '/secondpage', name: 'Secondpage', component: () => import('./views/SecondPage.vue') } // This is another way to import a component
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  

createApp(App).use(router).mount('#app')