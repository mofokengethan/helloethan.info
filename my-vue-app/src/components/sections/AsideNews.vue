<script setup>
import {ref} from "vue";

const props = defineProps({
  asideType: String,
  title: String,
  description: String,
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
  <div v-if="props.asideType === 'left'">
    <div class="left">
      <div class="section">
        <h3>{{title}}</h3>
        <p>{{description}}</p>
        <ul class="list">
          <li v-for="(item, i) in articles" :key="i" class="item">
            <a :href="item.link">{{ item.title }}</a>
            <div class="meta">{{ item.meta }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="right">
      <div class="section">
        <h3>{{title}}</h3>
        <p>{{description}}</p>
        <ul class="list">
          <li v-for="(item, i) in articles" :key="i" class="item">
            <a :href="item.link">{{ item.title }}</a>
            <div class="meta">{{ item.meta }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section { padding: 12px; }
.section h3 { margin: 0 0 8px; font: 23px/1.2 "Playfair Display SC", "Times New Roman", Times, serif; }
.list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
.list .item a { font-weight: 600; text-decoration: none; }
.meta { color: #000000; font-size: 12px; margin-top: 2px; }
.article h4 { margin: 0 0 4px; font: 700 17px/1.25 Georgia, "Times New Roman", Times, serif; }
.article p { margin: 0; color: #000000; font-size: 15px; }
p { font: 15px/1.2 Georgia, "Times New Roman", Times, serif; }
a { font: 300 20px/1.2 Georgia, "Times New Roman", Times, serif; }
li { padding: 12px;}
</style>