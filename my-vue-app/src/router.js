import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/LandingPage.vue'
import AboutView from './AboutView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})