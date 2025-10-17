<script setup>

import Header from "../sections/Header.vue";
import CardCarousel from "../sections/CardCarousel.vue";
</script>

<template>
  <Header header-type="dev" />

  <!-- Added: horizontally scrollable news section -->
  <CardCarousel title="Google Cloud Platform"/>
  <CardCarousel title="AWS"/>
  <CardCarousel title="Microsoft Azure"/>
</template>

<style scoped>

.section h3 { margin: 0 0 8px; font: 700 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; letter-spacing: .2px; }
.list .item a { font-weight: 600; text-decoration: none; }
.meta { color: #666; font-size: 12px; margin-top: 2px; }
.hero h1 { margin: 10px 0 6px; font-family: Georgia, "Times New Roman", Times, serif; font-size: clamp(22px, 4.2vw, 36px); line-height: 1.12; }
.hero .dek { color: #333; font-size: 15px; }
.article h4 { margin: 0 0 4px; font: 700 17px/1.25 Georgia, "Times New Roman", Times, serif; }
.article p { margin: 0; color: #333; font-size: 15px; }
/* === Added: Horizontally scrollable news strip === */
.hscroll { margin-top: 24px; }
.hscroll-title { margin: 0 0 8px; font: 700 18px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; letter-spacing: .2px; padding: 0 4px; }
.hrow { display: flex; gap: 14px; overflow-x: auto; -webkit-overflow-scrolling: touch; padding: 6px 4px 12px; scroll-snap-type: x mandatory; }
.card { flex: 0 0 auto; width: clamp(240px, 70vw, 320px); background: #fff; border: 1px solid #e6e6e6; border-radius: 8px; scroll-snap-align: start; }
.card .img { width: 100%; aspect-ratio: 16/9; background: #dfe6ef; border-bottom: 1px solid #e6e6e6; }

</style>