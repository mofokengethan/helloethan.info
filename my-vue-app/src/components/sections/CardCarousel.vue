<script setup>
import { ref } from 'vue';
const props = defineProps({ title: String, description: String });
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
    title: "Mastering State in Jetpack Compose",
    description: "Understanding state hoisting and recomposition patterns.",
    image: `/assets/photos/backgrounds/${Math.floor(Math.random() * 101)}.jpg`,
    summary: "Explore state management and lifecycle awareness in Compose.",
    meta: "5m ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Building Dynamic UI with LazyColumn",
    description: "How to efficiently render large data lists.",
    image: `/assets/photos/backgrounds/${Math.floor(Math.random() * 101)}.jpg`,
    summary: "Leverage Compose’s LazyColumn for high-performance scrolling lists.",
    meta: "12m ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Animating Transitions with Compose",
    description: "Smoothly animate between UI states.",
    image: `/assets/photos/backgrounds/${Math.floor(Math.random() * 101)}.jpg`,
    summary: "Use rememberInfiniteTransition and AnimatedVisibility for rich UX.",
    meta: "25m ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Material 3 Design in Compose",
    description: "Migrating to Material You with Jetpack Compose.",
    image: `/assets/photos/backgrounds/${Math.floor(Math.random() * 101)}.jpg`,
    summary: "Adopt dynamic color and adaptive layouts with Material 3.",
    meta: "45m ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Composable Navigation Basics",
    description: "Simplify screen transitions in Compose apps.",
    image: `/assets/photos/backgrounds/${Math.floor(Math.random() * 101)}.jpg`,
    summary: "Learn to use Navigation Compose for declarative navigation.",
    meta: "1h ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Working with Side Effects",
    description: "Handle external events safely within composables.",
    image: `/assets/photos/backgrounds/${Math.floor(Math.random() * 101)}.jpg`,
    summary: "Master LaunchedEffect, rememberCoroutineScope, and DisposableEffect.",
    meta: "1h 20m ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Compose Performance Tips",
    description: "Best practices for optimizing Compose rendering.",
    image: `/assets/photos/backgrounds/${Math.floor(Math.random() * 101)}.jpg`,
    summary: "Minimize recomposition and optimize state flow updates.",
    meta: "2h ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Previewing UI Efficiently",
    description: "Accelerate development using Android Studio previews.",
    image: `/assets/photos/backgrounds/${Math.floor(Math.random() * 101)}.jpg`,
    summary: "Learn how @Preview and parameterized previews boost productivity.",
    meta: "3h ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Theming and Typography in Compose",
    description: "Customize text and color across your app.",
    image: `/assets/photos/backgrounds/${Math.floor(Math.random() * 101)}.jpg`,
    summary: "Leverage MaterialTheme for consistent styling and branding.",
    meta: "3h 30m ago",
    link: "#"
  }),
  new ArticleCard({
    title: "Integrating Compose with XML Views",
    description: "Gradually migrate legacy layouts to Compose.",
    image: `/assets/photos/backgrounds/${Math.floor(Math.random() * 101)}.jpg`,
    summary: "Embed Compose in existing apps using ComposeView and interoperability APIs.",
    meta: "4h ago",
    link: "#"
  })
]);
</script>

<template>
  <section class="horizontalScroll">
    <h2 class="playfair-display-sc-bold">{{ props.title }}</h2>
    <p>{{ description }}</p>
    <div class="horizontalRow">
      <article v-for="(article, index) in articles" :key="index" class="card">
        <div class="img" role="img" :aria-label="article.title" :style="{ backgroundImage: `url(${article.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }"></div>
        <div class="body">
          <h4 class="title">
            <a :href="article.link">{{ article.title }}</a>
          </h4>
          <p class="sum">{{ article.summary }}</p>
          <div class="meta">{{ article.meta }}</div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
article { padding: 12px; margin-bottom: 8px;}
.section h3 { margin: 0 0 8px; font: 700 14px/1.2 Georgia, "Times New Roman", Times, serif;  }
.list .item a { font-weight: 600; text-decoration: none; }
.meta { color: #ffffff; font-size: 12px; margin-top: 2px; }
.hero h1 { margin: 10px 0 6px; font-family: Georgia, "Times New Roman", Times, serif; font-size: clamp(22px, 4.2vw, 36px); line-height: 1.12; }
.article h4 { margin: 0 0 4px; font: 700 20px/1.25 Georgia, "Times New Roman", Times, serif; }
.article p { margin: 0; color: #ffffff; font-size: 15px; }
.horizontalScroll { margin-top: 24px; margin-bottom: 36px; text-align: start; padding: 0 3%;}
.horizontalRow { display: flex; gap: 14px; overflow-x: auto; -webkit-overflow-scrolling: touch; padding: 6px 4px 12px; scroll-snap-type: x mandatory; }
.card { flex: 0 0 auto; width: clamp(240px, 70vw, 320px); background: #fff; border: 1px solid #e6e6e6; border-radius: 1px; scroll-snap-align: start; }
.card .img { width: 100%; aspect-ratio: 16/9; background: #fff; border-bottom: 1px solid #e6e6e6; }
p { font: 15px/1.25 Georgia, "Times New Roman", Times, serif; }
a { font: 300 20px/1.25 Georgia, "Times New Roman", Times, serif; }
h2 { margin-bottom: 0; }
</style>