import { createWebHistory, createRouter } from 'vue-router'

import LandingPage from "./components/LandingPage.vue";
import AndroidPage from "./components/pages/AndroidPage.vue";
import WebPage from "./components/pages/WebPage.vue";
import IOSPage from "./components/pages/IOSPage.vue";

const routes = [
    { path: '/', component: LandingPage },
    { path: '/android', component: AndroidPage },
    { path: '/ios', component: IOSPage },
    { path: '/web', component: WebPage },

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})