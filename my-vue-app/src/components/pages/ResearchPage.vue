<script setup>

</script>

<template>
  <div class="small-button-row">
    <RouterLink to="/" class="btn">🏡 Home</RouterLink>
    <RouterLink to="" class="btn">🔭 Research</RouterLink>
  </div>
  <h1>Research</h1>
  <div class="button-row">
    <a href="https://www.linkedin.com/in/mofokengethan" class="btn">🤺 LinkedIn</a>
    <RouterLink to="/android" class="btn">🤖 Android</RouterLink>
    <RouterLink to="/ios" class="btn">🍎 iOS</RouterLink>
    <RouterLink to="/apis" class="btn">🔌 APIs</RouterLink>
    <RouterLink to="/cloud" class="btn">☁️ Cloud</RouterLink>
    <RouterLink to="/blog" class="btn">💻 Blog</RouterLink>
    <RouterLink to="/reviews" class="btn">🗞️ Reviews</RouterLink>
    <RouterLink to="/web" class="btn">🕸️ Web</RouterLink>
    <RouterLink to="/departure" class="btn">🛩️ Departure</RouterLink>
    <RouterLink to="/languages" class="btn">🧠 Languages</RouterLink>
  </div>
  <section class="research-shell" aria-label="Research Mode">
    <div class="research-grid">
      <!-- Document Viewer -->
      <main class="doc" aria-label="Document Viewer">
        <article class="doc-card">
          <h1 class="doc-title">Incremental App Architecture for Android</h1>
          <p class="doc-abstract">
            <strong>Abstract:</strong> This document outlines an incremental migration plan toward modularized features,
            guarded rollouts, and performance gates in CI/CD for large Android apps.
          </p>
          <ul class="key-findings">
            <li>Feature-flagged modularization to de-risk refactors</li>
            <li>Release gates based on startup/ANR/crash thresholds</li>
            <li>Observability with trend baselines per module</li>
          </ul>
        </article>

        <!-- Data Table (placeholder) -->
        <section class="data" aria-label="Dataset">
          <h3 class="sub">Dataset</h3>
          <div class="table-wrap" role="region" aria-label="Scrollable data table" tabindex="0">
            <table class="table">
              <thead>
              <tr>
                <th scope="col">Metric</th>
                <th scope="col">Before</th>
                <th scope="col">After</th>
                <th scope="col">Δ</th>
              </tr>
              </thead>
              <tbody>
              <tr><td>Cold Start (p50)</td><td>820 ms</td><td>690 ms</td><td>-130 ms</td></tr>
              <tr><td>Crash-free Sessions</td><td>98.3%</td><td>99.1%</td><td>+0.8 pp</td></tr>
              <tr><td>ANR Rate</td><td>0.47%</td><td>0.22%</td><td>-0.25 pp</td></tr>
              </tbody>
            </table>
          </div>
          <p class="data-note">Note: sample data for layout only.</p>
        </section>
      </main>

      <!-- Citations -->
      <aside class="cites" aria-label="Citations">
        <h3 class="sub">Citations</h3>
        <ol class="cite-list">
          <li>
            <a href="#" rel="nofollow">Android Performance Patterns</a>
            <div class="cite-meta">Google • guide • 2024</div>
          </li>
          <li>
            <a href="#" rel="nofollow">Play Console: ANR & Crash diagnostics</a>
            <div class="cite-meta">Google • docs • 2025</div>
          </li>
          <li>
            <a href="#" rel="nofollow">Jetpack Performance Tuner</a>
            <div class="cite-meta">Google • library • 2025</div>
          </li>
        </ol>
      </aside>
    </div>
  </section>
  <!-- === /ADDED === -->

</template>

<style scoped>
:root {
  --r-bg: #0b0b0c;
  --r-surface: #111214;
  --r-card: #16181a;
  --r-border: #2a2e33;
  --r-text: #e8eaed;
  --r-dim: #b8bfc7;
  --r-accent: #7cb342; /* subtle research accent */
}

.research-shell {
  background: var(--r-bg);
  border-top: 1px solid var(--r-border);
  padding: 16px;
  color: var(--r-text);
}

.research-header {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.research-title {
  margin: 0;
  font: 700 20px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  letter-spacing: .2px;
}

.r-controls { display: flex; gap: 8px; align-items: center; }
.r-search, .r-sort {
  background: var(--r-surface);
  color: var(--r-text);
  border: 1px solid var(--r-border);
  border-radius: 8px;
  padding: 8px 10px;
  font: 500 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  outline: none;
}
.r-search::placeholder { color: var(--r-dim); }

.research-grid {
  background: #191919;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 16px;
}

@media (max-width: 1023px) {
  .research-grid { grid-template-columns: 1fr; }
}

.toc, .doc, .cites {
  background: var(--r-surface);
  border: 1px solid var(--r-border);
  border-radius: 10px;
  padding: 12px;
}

.sub {
  margin: 0 0 8px;
  font: 700 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
}
.sub-tight { margin-top: 12px; }

.pill-list, .tag-list, .key-findings, .cite-list { margin: 0; padding: 0; list-style: none; }

.pill-list { display: flex; flex-wrap: wrap; gap: 8px; }
.pill {
  border: 1px solid var(--r-border);
  background: var(--r-card);
  color: var(--r-text);
  border-radius: 999px;
  padding: 6px 10px;
  font: 600 12px/1 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  cursor: pointer;
}
.pill.is-active { outline: 2px solid var(--r-accent); }

.tag-list li { margin: 6px 0; color: var(--r-dim); }
.tag-list input { margin-right: 6px; }

.doc-card {
  background: var(--r-card);
  border: 1px solid var(--r-border);
  border-radius: 12px;
  padding: 14px;
}
.doc-title {
  margin: 0 0 6px;
  font: 700 22px/1.2 Georgia, "Times New Roman", Times, serif;
}
.doc-abstract { color: var(--r-dim); margin: 0 0 10px; font-size: 14px; }
.key-findings li { margin: 6px 0; }

.data { margin-top: 12px; }
.table-wrap {
  overflow: auto;
  border: 1px solid var(--r-border);
  border-radius: 10px;
  background: var(--r-card);
}
.table {
  width: 100%;
  border-collapse: collapse;
  min-width: 520px;
}
.table th, .table td {
  padding: 10px;
  border-bottom: 1px solid var(--r-border);
  text-align: left;
  font-size: 14px;
}
.table thead th {
  position: sticky;
  top: 0;
  background: var(--r-card);
  z-index: 1;
}
.data-note { color: var(--r-dim); font-size: 12px; margin-top: 6px; }

.cite-list li { margin: 10px 0; }
.cite-list a { color: var(--r-text); text-decoration: none; font-weight: 600; }
.cite-list a:hover { text-decoration: underline; }
.cite-meta { color: var(--r-dim); font-size: 12px; margin-top: 2px; }
</style>