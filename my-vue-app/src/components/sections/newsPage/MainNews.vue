<script setup>

</script>

<template>
  <div class="main">
    <article class="hero" aria-label="Featured story">
      <div class="hero-figure" role="img" aria-label="placeholder image"></div>
      <h1>On a Cascades peak, a lookout eyes a fiery future</h1>
      <p class="dek">A summer atop a North Cascades ridge offers a front-row view of Washington’s warming, drying wildfire reality.</p>
      <div class="meta">Updated 1h ago</div>
    </article>
    <div class="articles" aria-label="More in News">
      <article class="article">
        <h4><a href="#">Tacoma’s detention center: what we saw on a rare tour</a></h4>
        <p>Photos and first-hand notes from inside the ICE facility after new oversight rules.</p>
        <div class="meta">2h ago</div>
      </article>
      <article class="article">
        <h4><a href="#">Hiking the site of Oregon’s deadliest airline crash</a></h4>
        <p>A solemn trek to a forested slope where recovery teams worked for weeks in 1978.</p>
        <div class="meta">2h ago</div>
      </article>
      <article class="article">
        <h4><a href="#">Child care crunch: 4 fixes local leaders are weighing</a></h4>
        <p>From subsidies to zoning: what could actually move the needle for families.</p>
        <div class="meta">3h ago</div>
      </article>
    </div>
  </div>
</template>

<style scoped>

:root {
  --gutter: 24px;
  --maxw: 1160px;
  --left: #e3f2fd;
  --main: #f1f8e9;
  --right: #fff3e0;
}

.main { background: var(--main); min-height: 300px; }

.section h3 { margin: 0 0 8px; font: 700 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
.list .item a { font-weight: 600; text-decoration: none; }
.meta { color: #ffffff; font-size: 12px; margin-top: 2px; }
.hero { padding: 12px; }
.hero-figure { width: 100%; aspect-ratio: 16/9; background: #dfe6ef; border: 1px solid #e6e6e6; }
.hero h1 { margin: 10px 0 6px; font-family: Georgia, "Times New Roman", Times, serif; font-size: clamp(22px, 4.2vw, 36px); line-height: 1.12; }
.hero .dek { color: #ff0000; font-size: 15px; }
.articles { padding: 12px; display: grid; gap: 16px; }
.article h4 { margin: 0 0 4px; font: 700 17px/1.25 Georgia, "Times New Roman", Times, serif; }
.article p { margin: 0; color: #ffffff; font-size: 15px; }

.section h3 { margin: 0 0 8px; font: 700 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;  }
.list .item a { font-weight: 600; text-decoration: none; }
.meta { color: #ffffff; font-size: 12px; margin-top: 2px; }
.hero h1 { margin: 10px 0 6px; font-family: Georgia, "Times New Roman", Times, serif; font-size: clamp(22px, 4.2vw, 36px); line-height: 1.12; }
.hero .dek { color: #ffffff; font-size: 15px; }
.article h4 { margin: 0 0 4px; font: 700 17px/1.25 Georgia, "Times New Roman", Times, serif; }
.article p { margin: 0; color: #ffffff; font-size: 15px; }

</style>