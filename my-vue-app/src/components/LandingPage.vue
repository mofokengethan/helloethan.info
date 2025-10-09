<script setup>
import { marked } from 'marked'

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
</script>

<template>
  <p><i>Native Android iOS Engineer</i></p>
  <h1>👋 Ethan Mofokeng 💻</h1>
  <div class="button-row">
    <a href="https://www.linkedin.com/in/mofokengethan" class="btn">LinkedIn</a>
    <a class="btn">🔭</a>
    <RouterLink to="/android" class="btn">Android</RouterLink>
    <RouterLink to="/ios" class="btn">iOS</RouterLink>
    <RouterLink to="/web" class="btn">Web</RouterLink>
  </div>
  <p><b>Mobile Software Engineer II</b> @ Excellus BCBS, 2024</p>
  <p><b>Mobile Software Engineer I</b> @ Excellus BCBS, 2023</p>
  <p><b>Software Development, M.Sc.</b> @ University of Strathclyde, 2021</p>
  <p><b>IT Data Management, B.Sc. </b> @ Colorado Technical University, 2017</p>
  <p><b>Religious Affair Specialist (56M)</b> @ Army, 2016</p>

  <!-- Published Section -->
  <br>
  <h1>Published ✅</h1>
  <div class="center" v-html="markdownHtml"></div>

  <!-- Certification Section -->
  <br>
  <h1>Certifications 🎗️️</h1>
  <p>Google Cloud (GCP) Professional Cloud Developer</p>
  <p>Google Cloud (GCP) Professional Data Engineer</p>
  <p>AWS Certified DevOps Engineer - Professional</p>
  <p>AWS Certified Developer - Associate</p>
  <p>AWS Certified Data Engineer - Associate</p>
  <p>Microsoft Certification: Github Action</p>
  <p>Microsoft Certified: DevOps Engineer Expert</p>
  <p>Microsoft Certified: Azure Developer Associate</p>
  <p>Microsoft Certified: Azure Fundamentals</p>

  <!-- Languages Section -->
  <br>
  <h1>CEFR</h1>
  <p>🇮🇳 Hindi - B2</p>
  <p>🇳🇱 Dutch - B2</p>
  <p>🇫🇷 French - B2</p>
  <p>🇩🇪 German - B2</p>

  <!-- Languages, Frameworks and Tools Section -->
  <br>
  <h1>Languages, Frameworks and Tools ⚒️</h1>
  <p><b style="color: #F87666">Kotlin</b>, Java, <b style="color: #58B09C">Swift</b>, Html, CSS, Javascript, Typescript</p>
  <p>Vue, <b style="color: #58B09C">SwiftUI</b>, Kotlin Multiplatform, <b style="color: #F87666">Jetpack Compose</b>, XML</p>
  <p>Git, Azure DevOps, Firebase Analytics, Adobe XD, Figma, Rive, Postman, Android Studio, Xcode, Jetbrains IDEs</p>
</template>

<style scoped>
</style>
