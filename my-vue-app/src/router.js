import { createWebHistory, createRouter } from 'vue-router'

import LandingPage from "./components/LandingPage.vue";
import AndroidPage from "./components/pages/AndroidPage.vue";
import WebPage from "./components/pages/WebPage.vue";
import IOSPage from "./components/pages/IOSPage.vue";
import APIPage from "./components/pages/APIPage.vue";
import BlogPage from "./components/pages/BlogPage.vue";
import ResearchPage from "./components/pages/ResearchPage.vue";
import DeparturePage from "./components/pages/DeparturePage.vue";
import CloudPage from "./components/pages/CloudPage.vue";
import LanguagePage from "./components/pages/LanguagePage.vue";
import ContentPage from "./components/pages/ContentPage.vue";
import NewsPage from "./components/pages/NewsPage.vue";
import ArabicaPage from "./components/pages/ArabicaPage.vue";

const routes = [
    { path: '/', component: LandingPage },
    { path: '/android', component: AndroidPage },
    { path: '/ios', component: IOSPage },
    { path: '/apis', component: APIPage },
    { path: '/cloud', component: CloudPage },
    { path: '/blog', component: BlogPage },
    { path: '/news', component: NewsPage },
    { path: '/research', component: ResearchPage },
    { path: '/web', component: WebPage },
    { path: '/departure', component: DeparturePage },
    { path: '/languages', component: LanguagePage },
    { path: '/content', component: ContentPage },
    { path: '/arabica', component: ArabicaPage },

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})