<script setup>
import { marked } from 'marked'
import Header from "./sections/Header.vue";
import CardCarousel from "./sections/CardCarousel.vue";
import AsideNews from "./sections/AsideNews.vue";
import MainNews from "./sections/MainNews.vue";
import {ref} from "vue";

defineProps({
  msg: String,
})

const markdown = `
| Android | iOS | Web |
|--------|--------|--------|
| | | [helloethan.info]() |
| | | [arabica.press]() |
| [LanguageLifeOS]() |
| [Learning Dutch]() |
| | [AmourOS]() |
| | [RoomServiceOS]() |
| | [NorskDuck]() |
`

const markdownHtml = marked(markdown)

function getRandomBackground() {
  const n = Math.floor(Math.random() * 101);
  return `/assets/photos/backgrounds/${n}.jpg`;
}

const backgroundImage = ref(getRandomBackground());
</script>

<template>

  <p><b>Mobile Software Engineer II</b> @ Excellus BCBS, 2024</p>
  <p><b>Mobile Software Engineer I</b> @ Excellus BCBS, 2023</p>
  <p><b>Software Development, M.Sc.</b> @ University of Strathclyde, 2021</p>
  <p><b>IT Data Management, B.Sc. </b> @ Colorado Technical University, 2017</p>
  <p><b>Religious Affair Specialist (56M)</b> @ Army, 2016</p>

  <div id="navbar">
    <div class="button-row">
      <a href="https://www.linkedin.com/in/mofokengethan" class="btn">LinkedIn</a>
      <RouterLink to="/android" class="btn">Android</RouterLink>
      <RouterLink to="/ios" class="btn">iOS</RouterLink>
      <RouterLink to="/apis" class="btn">APIs</RouterLink>
      <RouterLink to="/cloud" class="btn">Cloud</RouterLink>
      <RouterLink to="/web" class="btn">Web</RouterLink>
      <RouterLink to="/blog" class="btn">Blog</RouterLink>
      <RouterLink to="/departures" class="btn">Departure</RouterLink>
      <RouterLink to="/language" class="btn">Language</RouterLink>
      <RouterLink to="/news" class="btn">News</RouterLink>
      <RouterLink to="/content" class="btn">Content</RouterLink>
      <RouterLink to="/arabica" class="btn">Arabica</RouterLink>
      <RouterLink to="/research" class="btn">Research</RouterLink>
    </div>
    <Header header-type="landing" />
  </div>

  <!-- Published Section -->
  <CardCarousel title="Published Apps On App Stores"/>

    <h2>🤖Android</h2>


  <div class="container">
    <div class="grid">
      <AsideNews asideType="left" title="🍎 iOS" description="Principles of constructing user interfaces across different platforms, focusing on component lifecycles, state management, and strategies for building shared-code systems."/>
      <MainNews :image="backgroundImage" />
      <AsideNews asideType="right" title="🕸️ Web" description="The art and science of crafting engaging digital products, covering visual aesthetics, information architecture, interaction design, and user journey mapping."/>
    </div>
  </div>

  <div class="container">
    <div class="grid">

      <!-- Languages Section -->
      <div>
        <h1>CEFR</h1>
        <p>🇳🇱 Dutch - B2</p>
        <p>🇫🇷 French - B2</p>
        <p>🇩🇪 German - B2</p>
        <p>🇮🇹 Italy - B2</p>
        <p>🇳🇴 Norwegian - B2</p>
        <p>🇸🇪 Swedish - B2</p>
      </div>

      <!-- Languages, Frameworks and Tools Section -->
      <div>
        <h1>Languages, Frameworks and Tools</h1>
        <p><b style="color: #F87666">Kotlin</b>, Java, <b style="color: #58B09C">Swift</b>, Html, CSS, Javascript, Typescript</p>
        <p>Vue, <b style="color: #58B09C">SwiftUI</b>, Kotlin Multiplatform, <b style="color: #F87666">Jetpack Compose</b>, XML</p>
        <p>Git, Azure DevOps, Firebase Analytics, Adobe XD, Figma, Rive, Postman, Android Studio, Xcode, Jetbrains IDEs</p>
      </div>

      <!-- Certification Section -->
      <div>
        <h1>Certifications</h1>
        <p><b>Google Cloud (GCP):</b> Professional Cloud Developer & Data Engineer</p>
        <p><b>AWS Certified:</b> Professional DevOps Engineer & Associate Developer & Associate Data Engineer</p>
        <p><b>Microsoft Certification:</b> Github Action & Expert DevOps Engineer & Associate Azure Developer</p>
      </div>
    </div>
  </div>

  <!-- Published Section -->
  <CardCarousel title="🔌 APIs"/>

  <!-- Published Section -->
  <CardCarousel title="☁️ Cloud"/>

  <!-- Published Section -->
  <CardCarousel title="🧠 Languages"/>

  <div class="container">
    <div class="grid">
      <AsideNews asideType="right" title="🛩️ Departures" description="The art and science of crafting engaging digital products, covering visual aesthetics, information architecture, interaction design, and user journey mapping."/>
      <AsideNews asideType="left" title="💻 Blog" description=""/>
      <AsideNews asideType="right" title="🔭 Research" description="The art and science of crafting engaging digital products, covering visual aesthetics, information architecture, interaction design, and user journey mapping."/>
    </div>
  </div>

  <!-- Published Section -->
  <CardCarousel title="🪜Content"/>

  <!-- Published Section -->
  <CardCarousel title="🗞️ News"/>
</template>

<style scoped>
h2 { font: 23px/1.2 "Playfair Display SC", "Times New Roman", Times, serif; }
a {
  font-family: "Playfair Display SC", serif;
}
#navbar {
  position: sticky;
  top: 0;
  overflow: hidden;
}

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
