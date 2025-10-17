<script setup>
import { ref } from 'vue';
const webPageTitle = ref(window.location.href).value.toString().split("/").findLast(url => url.length > 0);
const props = defineProps({ headerType: String });
const ethanMofokengLinkedIn = "https://www.linkedin.com/in/mofokengethan";
const devRoutes = new Map(
    [
      ['home', {id: 'home', title: 'Ethan Mofokeng', navigation: "/" }],
      ['linkedin', {id: 'linkedin', title: 'LinkedIn', navigation: ethanMofokengLinkedIn }],
      ['android', {id: 'android', title: 'Android', navigation: "/android" }],
      ['ios', {id: 'ios', title: 'iOS', navigation: "/ios" }],
      ['apis', {id: 'apis', title: 'APIs', navigation: "/apis" }],
      ['cloud', {id: 'cloud', title: 'Cloud', navigation: "/cloud" }],
      ['web', {id: 'web', title: 'Web', navigation: "/web" }],
      ['blog', {id: 'blog', title: 'Blog', navigation: "/blog" }],
      ['departure', {id: 'departure', title: 'Departures', navigation: "/departure" }],
      ['languages', {id: 'languages', title: 'Languages', navigation: "/languages" }],
      ['news', {id: 'news', title: 'News', navigation: "/news" }],
      ['content', {id: 'content', title: 'Content', navigation: "/content" }],
      ['arabica', {id: 'arabica', title: 'Arabica', navigation: "/arabica" }],
      ['research', {id: 'research', title: 'Research', navigation: "/research" }],
    ]
);
const devRouteArray = Array
    .from(devRoutes.values())
    .filter(route => route.id !== "home");
</script>

<template>
    <section class="horizontalScroll" id="navbar">
      <div class="horizontalRow">
        <div v-if="props.headerType === 'dev'">
          <div class="button-row">
            <div v-for="routes in devRouteArray">
              <div v-if="routes.id === 'linkedin'"><a :href="ethanMofokengLinkedIn" class="btn">LinkedIn</a></div>
              <div v-else>
                <div v-if="routes.id === devRoutes.get(webPageTitle).title.toLowerCase()">
                  <p class="btn-selected">{{devRoutes.get(webPageTitle).title}}</p>
                </div>
                <div v-else><RouterLink :to="routes.navigation" class="btn">{{ routes.title }}</RouterLink></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <h1><RouterLink to="/" >{{ devRoutes.get("home").title }}</RouterLink></h1>
</template>

<style scoped>
.horizontalScroll { text-align: start; padding: 0 3%; margin: 0 auto; background-color: #ffffff;}
.horizontalRow { display: flex; gap: 14px; overflow-x: auto; -webkit-overflow-scrolling: touch; padding: 0 4px 12px; scroll-snap-type: x mandatory; }

#navbar {
  position: sticky;
  top: 0;
  overflow: hidden;
}

h1 {
  margin: 0;
  background-color: black;
  padding: 1rem;
}

h1 a {
  font-family: "Cinzel Decorative", serif;
  margin-top: 0;
  color: white;
}

.button-row {
  -webkit-overflow-scrolling: touch;
  display: flex;
  font-family: "Playfair Display SC", serif;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: thin;
  justify-content: center;
}

@media (min-width: 725px) {
  .button-row {
    justify-content: center;
  }
}

@media (max-width: 760px) {
  .button-row {
    justify-content: start;
  }
}

.button-row::-webkit-scrollbar {
  height: 8px;
}

.button-row::-webkit-scrollbar-track {
  background: #1a1a1a;
}
</style>