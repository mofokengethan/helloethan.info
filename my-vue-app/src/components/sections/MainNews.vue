<script setup>
import { ref } from 'vue';
const props = defineProps({
  image: String
})
class ArticleCard {
  constructor({ title, description, image, summary, meta, link }) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.summary = summary;
    this.meta = meta;
    this.link = link || "#";
  }
}
const articles = ref([
  new ArticleCard({
    title: "Compose Multiplatform: Shared UI Across Devices",
    description: "",
    image: "",
    summary: "Build for Android, Desktop, and Web with one codebase.",
    meta: "2h ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Exploring Compose Animation APIs",
    description: "",
    image: "",
    summary: "Bring your UI to life with animate*AsState and transitions.",
    meta: "2h 15m ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Building Adaptive Layouts with ConstraintLayout",
    description: "",
    image: "",
    summary: "Achieve responsive design using Compose’s ConstraintLayout DSL.",
    meta: "2h 30m ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Compose Testing Essentials",
    description: "",
    image: "",
    summary: "Learn testing strategies using ComposeTestRule and semantics.",
    meta: "3h ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Compose Tooling: Live Edit & Preview Updates",
    description: "",
    image: "",
    summary: "Speed up iteration with new Android Studio features.",
    meta: "3h 30m ago",
    link: "#"
  })
]);
</script>

<template>
  <div class="main">
    <article class="hero" aria-label="Featured story">
      <div class="hero-figure" role="img" aria-label="placeholder image">
        <img :src=props.image alt="placeholder image">
      </div>
      <h1 class="cinzel-decorative-regular">On a Cascades peak, a lookout eyes a fiery future</h1>
      <p class="dek">A summer atop a North Cascades ridge offers a front-row view of Washington’s warming, drying wildfire reality.</p>
      <div class="meta">Updated 1h ago</div>
    </article>
    <div class="articles" aria-label="More in News">
      <article v-for="(article, index) in articles" :key="index" class="article">
        <h4><a :href="article.link">{{ article.title }}</a></h4>
        <p>{{ article.summary }}</p>
        <div class="meta">{{ article.meta }}</div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.section h3 { margin: 0 0 8px; font: 700 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
.list .item a { font-weight: 600; text-decoration: none; }
.meta { color: #000000; font-size: 12px; margin-top: 2px; }
.hero { padding: 12px; }
.hero-figure { width: 100%; height: 100%;}
.hero-figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0;
  background: #dfe6ef;
  border: 1px solid #000000;
}
.hero h1 { margin: 10px 0 6px; font-family: "Playfair Display SC", serif; font-size: clamp(22px, 4.2vw, 36px); line-height: 1.12; }
.articles { padding: 12px; display: grid; gap: 16px; }
.article h4 { margin: 0 0 4px; font: 700 17px/1.25 Georgia, "Times New Roman", Times, serif; }
.article h4 a { margin: 0 0 4px; font: 700 23px/1.25 Georgia, "Times New Roman", Times, serif; }
.article p { margin: 0; color: #000000; font-size: 15px; }

</style>