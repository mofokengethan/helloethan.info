<script setup>
import Header from "../sections/Header.vue";
import AsideNews from "../sections/newsPage/AsideNews.vue";
import MainNews from "../sections/newsPage/MainNews.vue";
import CardCarousel from "../sections/CardCarousel.vue";
</script>

<template>
  <Header header-type="dev" />

  <!-- New Articles -->
  <div class="container">
    <div class="grid">
      <AsideNews asideType="left"/>
      <MainNews />
      <AsideNews asideType="right"/>
    </div>
  </div>

  <CardCarousel title="Published Mobile Apps"/>
  <CardCarousel title="Latest Features"/>
  <CardCarousel title="Upcoming Features"/>

  <!-- New Articles -->
  <div class="container">
    <div class="grid">
      <AsideNews asideType="left"/>
      <MainNews />
      <AsideNews asideType="right"/>
    </div>
  </div>

  <CardCarousel title="Google Play Store Updates"/>

  <!-- New Articles -->
  <div class="container">
    <div class="grid">
      <AsideNews asideType="left"/>
      <MainNews />
      <AsideNews asideType="right"/>
    </div>
  </div>

  <CardCarousel title="Backend Services"/>
</template>

<style scoped>
.container { max-width: var(--maxw); margin: 0 auto; padding: 16px; }

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gutter);
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