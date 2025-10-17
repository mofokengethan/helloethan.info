<script setup>

import Header from "../sections/Header.vue";
</script>

<template>
  <Header header-type="dev" />

  <section class="topics" aria-label="Topics">
    <h1 class="topics-title">?</h1>
    <ul class="topics-list">
      <li class="topics-item">
        <RouterLink to="/android" class="topics-link">
          <span class="t-title">Android</span>
          <span class="t-desc">UI frameworks, architecture, performance, publishing.</span>
          <span class="t-chevron" aria-hidden="true"></span>
        </RouterLink>
      </li>
      <li class="topics-item">
        <RouterLink to="/ios" class="topics-link">
          <span class="t-title">iOS</span>
          <span class="t-desc">Swift/SwiftUI patterns, testing, distribution, metrics.</span>
          <span class="t-chevron" aria-hidden="true"></span>
        </RouterLink>
      </li>
      <li class="topics-item">
        <RouterLink to="/apis" class="topics-link">
          <span class="t-title">APIs</span>
          <span class="t-desc">REST/GraphQL design, auth, versioning, reliability.</span>
          <span class="t-chevron" aria-hidden="true"></span>
        </RouterLink>
      </li>
      <li class="topics-item">
        <RouterLink to="/cloud" class="topics-link">
          <span class="t-title">Cloud</span>
          <span class="t-desc">Deployments, CI/CD, observability, cost & scale.</span>
          <span class="t-chevron" aria-hidden="true"></span>
        </RouterLink>
      </li>
      <li class="topics-item">
        <RouterLink to="/testing" class="topics-link">
          <span class="t-title">Testing</span>
          <span class="t-desc">Unit, UI, integration, flake control, coverage.</span>
          <span class="t-chevron" aria-hidden="true"></span>
        </RouterLink>
      </li>
      <li class="topics-item">
        <RouterLink to="/research" class="topics-link">
          <span class="t-title">Research</span>
          <span class="t-desc">Whitepapers, benchmarks, experiments, citations.</span>
          <span class="t-chevron" aria-hidden="true"></span>
        </RouterLink>
      </li>
    </ul>
  </section>

</template>

<style scoped>
.topics { background: #fff; padding: 16px; }
.topics-title {
  margin: 0 0 10px;
  font: 700 23px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  color: #0b0c0c;
}

.topics-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #d8d8d8;
}
.topics-item {
  border-bottom: 1px solid #d8d8d8;
  justify-content: start;
  text-align: start;
}

.topics-link {
  position: relative;
  display: block;
  padding: 14px 36px 14px 0;
  text-decoration: none;
}
.t-title {
  display: inline-block;
  color: #1d70b8;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.topics-link:hover .t-title,
.topics-link:focus .t-title { text-decoration-thickness: 2px; }

.t-desc {
  display: block;
  margin-top: 4px;
  color: #505a5f;
  font-size: 16px;
}

.t-chevron {
  position: absolute;
  right: 8px;
  top: 50%;
  width: 8px;
  height: 8px;
  border-right: 2px solid #1d70b8;
  border-bottom: 2px solid #1d70b8;
  transform: translateY(-50%) rotate(-45deg);
}
.topics-link:focus-visible {
  outline: 3px solid #ffdd00; /* high-contrast focus, keyboard friendly */
  outline-offset: 2px;
  border-radius: 2px;
}
</style>