<script setup>
import { ref } from 'vue';
import Header from "../sections/Header.vue";
import AsideNews from "../sections/AsideNews.vue";
import MainNews from "../sections/MainNews.vue";
import CardCarousel from "../sections/CardCarousel.vue";

function getRandomBackground() {
  const n = Math.floor(Math.random() * 101);
  return `/assets/photos/backgrounds/${n}.jpg`;
}

const backgroundImage = ref(getRandomBackground());
</script>

<template>
  <Header header-type="dev" />

  <!-- UI -->
  <div class="container">
    <div class="grid">
      <AsideNews asideType="left" title="UI Frameworks" description="Principles of constructing user interfaces across different platforms, focusing on component lifecycles, state management, and strategies for building shared-code systems."/>
      <MainNews :image="backgroundImage"/>
      <AsideNews asideType="right" title="UI/UX Design" description="The art and science of crafting engaging digital products, covering visual aesthetics, information architecture, interaction design, and user journey mapping."/>
    </div>
  </div>

  <CardCarousel title="Published Mobile Apps"/>
  <CardCarousel title="Latest Features"/>
  <CardCarousel title="Upcoming Features"/>

  <!-- New Articles -->
  <div class="container">
    <div class="grid">
      <AsideNews asideType="left" title="Unit Testing" description="Methods for verifying the smallest, isolated parts of your application's logic to ensure correctness, reliability, and ease of future refactoring." />
      <MainNews image="/assets/android/testing-background.jpg"/>
      <AsideNews asideType="right" title="UI Testing" description="Automated techniques for simulating user interactions to validate the end-to-end flow and visual integrity of the application across various devices and configurations."/>
    </div>
  </div>

  <CardCarousel title="Google Play Store Updates"/>

  <!-- New Articles -->
  <div class="container">
    <div class="grid">
      <AsideNews asideType="left" title="CI/CD" description="Best practices for automating the entire software delivery pipeline, from committing code to releasing stable builds, to achieve faster and more reliable deployments."/>
      <MainNews image="/assets/android/tools-background.jpg"/>
      <AsideNews asideType="right" title="Tools" description="Insights and tutorials on the essential software and utilities that boost developer productivity, improve code quality, and simplify complex build processes."/>
    </div>
  </div>

  <CardCarousel title="Backend Services" description="Discussions on the architecture, integration, and management of the server-side components and APIs that provide data and functionality to your client applications."/>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding: 0 16px 16px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;

}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: 260px 1fr;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 290px 1fr 290px;
  }
}
</style>