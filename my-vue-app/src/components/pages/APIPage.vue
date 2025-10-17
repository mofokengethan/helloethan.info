<script setup>

import Header from "../sections/Header.vue";
import CardCarousel from "../sections/CardCarousel.vue";
</script>

<template>
  <Header header-type="dev" />

  <!-- Added: horizontally scrollable news section -->
  <CardCarousel title="National Weather Service"/>

</template>

<style scoped>
</style>