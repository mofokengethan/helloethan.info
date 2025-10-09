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
  <h1>👋 {{ msg }} 💻</h1>
  <div class="button-row">
    <a href="https://www.linkedin.com/in/mofokengethan" class="btn">About</a>
    <a href="" class="btn">Android</a>
    <a href="" class="btn">iOS</a>
    <a href="" class="btn">Web</a>
    <a class="btn">🔭</a>
    <a href="" class="btn">About</a>
    <a href="" class="btn">About</a>
    <a href="" class="btn">About</a>
    <a href="" class="btn">About</a>
  </div>
  <p><b>Mobile Software Engineer II</b> @ Excellus BCBS</p>
  <p><b>Mobile Software Engineer I</b> @ Excellus BCBS</p>
  <p><b>Religious Affair Specialist (56M)</b> @ Army</p>
  <br>
  <h1>Published ✅</h1>
  <div class="center" v-html="markdownHtml"></div>
  <br>
  <p><b>Software Development, M.Sc.</b> @ University of Strathclyde</p>
  <p><b>IT Data Management, B.Sc. </b> @ Colorado Technical University</p>
  <br>
  <h1>Languages, Frameworks and Tools ⚒️</h1>
  <p><b style="color: #F87666">Kotlin</b>, Java, <b style="color: #58B09C">Swift</b>, Html, CSS, Javascript, Typescript</p>
  <p>Vue, <b style="color: #58B09C">SwiftUI</b>, Kotlin Multiplatform, <b style="color: #F87666">Jetpack Compose</b>, XML</p>
  <p>Git, Azure DevOps, Firebase Analytics, Adobe XD, Figma, Rive, Postman, Android Studio, Xcode, Jetbrains IDEs</p>
</template>

<style scoped>
</style>
