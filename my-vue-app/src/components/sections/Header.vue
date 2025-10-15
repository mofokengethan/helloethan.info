<script setup>
import { ref } from 'vue';

const webPageTitle = ref(window.location.href).value.toString().split("/").findLast(url => url.length > 0);
const props = defineProps({ headerType: String });
const ethanMofokengLinkedIn = "https://www.linkedin.com/in/mofokengethan";

const devRoutes = new Map(
    [
      ['home', {id: 'home', title: 'Ethan Mofokeng', navigation: "/" }],
      ['linkedin', {id: 'linkedin', title: '🤺 LinkedIn', navigation: ethanMofokengLinkedIn }],
      ['android', {id: 'android', title: '🤖 Android', navigation: "/android" }],
      ['ios', {id: 'ios', title: '🍎 iOS', navigation: "/ios" }],
      ['apis', {id: 'apis', title: '🔌 APIs', navigation: "/apis" }],
      ['cloud', {id: 'cloud', title: '☁️ Cloud', navigation: "/cloud" }],
      ['web', {id: 'web', title: '🕸️ Web', navigation: "/web" }],
    ]
);

const devRouteArray = Array
    .from(devRoutes.values())
    .filter(route => route.id !== webPageTitle && route.id !== "home");

const artRoutes = new Map(
    [
      ['home', {id: 'home', title: 'Ethan Mofokeng', navigation: "/" }],
      ['linkedin', {id: 'linkedin', title: '🤺 LinkedIn', navigation: ethanMofokengLinkedIn }],
      ['departure', {id: 'departure', title: '🛩️ Departures', navigation: "/departure" }],
      ['blog', {id: 'blog', title: '💻 Blog', navigation: "/blog" }],
      ['news', {id: 'news', title: '🗞️ News', navigation: "/news" }],
      ['research', {id: 'research', title: '🔭 Research', navigation: "/research" }],
      ['languages', {id: 'languages', title: '🧠 Languages', navigation: "/languages" }],
    ]
);

const artRouteArray = Array
    .from(artRoutes.values())
    .filter(route => route.id !== webPageTitle && route.id !== "home");
</script>

<template>
  <div v-if="props.headerType === 'dev'">
    <h4>{{ devRoutes.get(webPageTitle).title }}</h4>
    <h1><RouterLink to="/" class="btn">{{ devRoutes.get("home").title }}</RouterLink></h1>
    <div class="button-row">
      <div v-for="routes in devRouteArray">
        <div v-if="routes.id === 'linkedin'">
          <a :href="ethanMofokengLinkedIn" class="btn">🤺 LinkedIn</a>
        </div>
        <div v-else>
          <RouterLink :to="routes.navigation" class="btn">{{ routes.title }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h4>{{ artRoutes.get(webPageTitle).title }}</h4>
    <h1><RouterLink to="/" class="btn">{{ artRoutes.get("home").title }}</RouterLink></h1>
    <div class="button-row">
      <div v-for="routes in artRouteArray" class="small-button-row">
        <div v-if="routes.id === 'linkedin'">
          <a :href="ethanMofokengLinkedIn" class="btn">🤺 LinkedIn</a>
        </div>
        <div v-else>
          <RouterLink :to="routes.navigation" class="btn">{{ routes.title }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-row {
  -webkit-overflow-scrolling: touch;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: thin;
  justify-content: center;
}

@media (min-width: 725px) {

  .small-button-row {
    justify-content: center;
  }

  .button-row {
    justify-content: center;
  }
}

@media (max-width: 760px) {
  .small-button-row {
    justify-content: start;
  }

  .button-row {
    justify-content: start;
  }
}

.small-button-row {
  -webkit-overflow-scrolling: touch;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: thin;
  justify-content: center;
}

.button-row::-webkit-scrollbar {
  height: 8px;
}

.button-row::-webkit-scrollbar-track {
  background: #1a1a1a;
}
</style>