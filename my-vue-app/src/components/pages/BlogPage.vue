<script setup>

import Header from "../sections/Header.vue";
</script>

<template>
  <Header header-type="art" />

  <!-- # UI + Main Section -->
  <div class="container">
    <div class="grid">

      <!-- # Android UI Frameworks Section -->
      <div class="left">
        <div class="section" aria-label="Top Stories">
          <h3>UI Frameworks</h3>
          <ul class="list">
            <li class="item"><a href="#">How Seattle’s waterfront is changing again</a><div class="meta">12m ago</div></li>
            <li class="item"><a href="#">WA ferries: What to expect this fall</a><div class="meta">28m ago</div></li>
            <li class="item"><a href="#">Inside Boeing’s next test milestone</a><div class="meta">53m ago</div></li>
            <li class="item"><a href="#">Rent trends shift across Puget Sound</a><div class="meta">1h ago</div></li>
            <li class="item"><a href="#">Mariners offseason outlook: 5 questions</a><div class="meta">1h ago</div></li>
            <li class="item"><a href="#">Light rail extension: What’s opening when</a><div class="meta">2h ago</div></li>
          </ul>
        </div>
      </div>

      <!-- # Main Section -->
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

      <!-- # UI/UX Design Section -->
      <div class="right">
        <div class="section" aria-label="Latest">
          <h3>UI/UX Design</h3>
          <ul class="list">
            <li class="item"><a href="#">Storms bring early mountain snow</a><div class="meta">9m ago</div></li>
            <li class="item"><a href="#">UW plans new AI research hub</a><div class="meta">21m ago</div></li>
            <li class="item"><a href="#">New Seattle bakery draws long lines</a><div class="meta">36m ago</div></li>
            <li class="item"><a href="#">WSDOT updates I-5 weekend closures</a><div class="meta">1h ago</div></li>
            <li class="item"><a href="#">Kraken make roster cuts ahead of opener</a><div class="meta">1h ago</div></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- # Apps on Google Play Store -->
  <section class="hscroll" aria-label="Featured">
    <h2 class="hscroll-title">Play Store Apps</h2>
    <div class="hrow">
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Ferry cuts ripple across islands</a></h4>
          <p class="sum">What the seasonal schedule change means for commuters.</p>
          <div class="meta">12m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">UW unveils new AI research hub</a></h4>
          <p class="sum">A public–private partnership aims to accelerate breakthroughs.</p>
          <div class="meta">22m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Kraken trim roster ahead of opener</a></h4>
          <p class="sum">Five prospects reassigned after pre-season finale.</p>
          <div class="meta">35m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Light rail extension: what’s next</a></h4>
          <p class="sum">Key stations and timelines for the north–south corridor.</p>
          <div class="meta">48m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Downtown housing conversions grow</a></h4>
          <p class="sum">Developers pitch new life for older office towers.</p>
          <div class="meta">1h ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Ferry cuts ripple across islands</a></h4>
          <p class="sum">What the seasonal schedule change means for commuters.</p>
          <div class="meta">12m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">UW unveils new AI research hub</a></h4>
          <p class="sum">A public–private partnership aims to accelerate breakthroughs.</p>
          <div class="meta">22m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Kraken trim roster ahead of opener</a></h4>
          <p class="sum">Five prospects reassigned after pre-season finale.</p>
          <div class="meta">35m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Light rail extension: what’s next</a></h4>
          <p class="sum">Key stations and timelines for the north–south corridor.</p>
          <div class="meta">48m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Downtown housing conversions grow</a></h4>
          <p class="sum">Developers pitch new life for older office towers.</p>
          <div class="meta">1h ago</div>
        </div>
      </article>
    </div>
  </section>


  <!-- # Latest Features from Apps on Google Play Store -->
  <section class="hscroll" aria-label="Featured">
    <h2 class="hscroll-title">Latest Features</h2>
    <div class="hrow">
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Ferry cuts ripple across islands</a></h4>
          <p class="sum">What the seasonal schedule change means for commuters.</p>
          <div class="meta">12m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">UW unveils new AI research hub</a></h4>
          <p class="sum">A public–private partnership aims to accelerate breakthroughs.</p>
          <div class="meta">22m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Kraken trim roster ahead of opener</a></h4>
          <p class="sum">Five prospects reassigned after pre-season finale.</p>
          <div class="meta">35m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Light rail extension: what’s next</a></h4>
          <p class="sum">Key stations and timelines for the north–south corridor.</p>
          <div class="meta">48m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Downtown housing conversions grow</a></h4>
          <p class="sum">Developers pitch new life for older office towers.</p>
          <div class="meta">1h ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Ferry cuts ripple across islands</a></h4>
          <p class="sum">What the seasonal schedule change means for commuters.</p>
          <div class="meta">12m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">UW unveils new AI research hub</a></h4>
          <p class="sum">A public–private partnership aims to accelerate breakthroughs.</p>
          <div class="meta">22m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Kraken trim roster ahead of opener</a></h4>
          <p class="sum">Five prospects reassigned after pre-season finale.</p>
          <div class="meta">35m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Light rail extension: what’s next</a></h4>
          <p class="sum">Key stations and timelines for the north–south corridor.</p>
          <div class="meta">48m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Downtown housing conversions grow</a></h4>
          <p class="sum">Developers pitch new life for older office towers.</p>
          <div class="meta">1h ago</div>
        </div>
      </article>
    </div>
  </section>

  <!-- # Testing + Main Section -->
  <div class="container">
    <div class="grid">

      <!-- # Unit Testing Section -->
      <div class="left">
        <div class="section" aria-label="Top Stories">
          <h3>Unit Testing</h3>
          <ul class="list">
            <li class="item"><a href="#">How Seattle’s waterfront is changing again</a><div class="meta">12m ago</div></li>
            <li class="item"><a href="#">WA ferries: What to expect this fall</a><div class="meta">28m ago</div></li>
            <li class="item"><a href="#">Inside Boeing’s next test milestone</a><div class="meta">53m ago</div></li>
            <li class="item"><a href="#">Rent trends shift across Puget Sound</a><div class="meta">1h ago</div></li>
            <li class="item"><a href="#">Mariners offseason outlook: 5 questions</a><div class="meta">1h ago</div></li>
            <li class="item"><a href="#">Light rail extension: What’s opening when</a><div class="meta">2h ago</div></li>
          </ul>
        </div>
      </div>

      <!-- # Main Section -->
      <div class="main">
        <h4>🤖 Android</h4>
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

      <!-- # UI Testing Section -->
      <div class="right">
        <div class="section" aria-label="Latest">
          <h3>UI Testing</h3>
          <ul class="list">
            <li class="item"><a href="#">Storms bring early mountain snow</a><div class="meta">9m ago</div></li>
            <li class="item"><a href="#">UW plans new AI research hub</a><div class="meta">21m ago</div></li>
            <li class="item"><a href="#">New Seattle bakery draws long lines</a><div class="meta">36m ago</div></li>
            <li class="item"><a href="#">WSDOT updates I-5 weekend closures</a><div class="meta">1h ago</div></li>
            <li class="item"><a href="#">Kraken make roster cuts ahead of opener</a><div class="meta">1h ago</div></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- # Google Play Store Updates -->
  <section class="hscroll" aria-label="Featured">
    <h2 class="hscroll-title">Play Store & Developer Updates</h2>
    <div class="hrow">
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Ferry cuts ripple across islands</a></h4>
          <p class="sum">What the seasonal schedule change means for commuters.</p>
          <div class="meta">12m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">UW unveils new AI research hub</a></h4>
          <p class="sum">A public–private partnership aims to accelerate breakthroughs.</p>
          <div class="meta">22m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Kraken trim roster ahead of opener</a></h4>
          <p class="sum">Five prospects reassigned after pre-season finale.</p>
          <div class="meta">35m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Light rail extension: what’s next</a></h4>
          <p class="sum">Key stations and timelines for the north–south corridor.</p>
          <div class="meta">48m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Downtown housing conversions grow</a></h4>
          <p class="sum">Developers pitch new life for older office towers.</p>
          <div class="meta">1h ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Ferry cuts ripple across islands</a></h4>
          <p class="sum">What the seasonal schedule change means for commuters.</p>
          <div class="meta">12m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">UW unveils new AI research hub</a></h4>
          <p class="sum">A public–private partnership aims to accelerate breakthroughs.</p>
          <div class="meta">22m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Kraken trim roster ahead of opener</a></h4>
          <p class="sum">Five prospects reassigned after pre-season finale.</p>
          <div class="meta">35m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Light rail extension: what’s next</a></h4>
          <p class="sum">Key stations and timelines for the north–south corridor.</p>
          <div class="meta">48m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Downtown housing conversions grow</a></h4>
          <p class="sum">Developers pitch new life for older office towers.</p>
          <div class="meta">1h ago</div>
        </div>
      </article>
    </div>
  </section>

  <div class="container">
    <div class="grid">

      <!-- # DevOps Section -->
      <div class="left">
        <div class="section" aria-label="Top Stories">
          <h3>DevOps</h3>
          <ul class="list">
            <li class="item"><a href="#">How Seattle’s waterfront is changing again</a><div class="meta">12m ago</div></li>
            <li class="item"><a href="#">WA ferries: What to expect this fall</a><div class="meta">28m ago</div></li>
            <li class="item"><a href="#">Inside Boeing’s next test milestone</a><div class="meta">53m ago</div></li>
            <li class="item"><a href="#">Rent trends shift across Puget Sound</a><div class="meta">1h ago</div></li>
            <li class="item"><a href="#">Mariners offseason outlook: 5 questions</a><div class="meta">1h ago</div></li>
            <li class="item"><a href="#">Light rail extension: What’s opening when</a><div class="meta">2h ago</div></li>
          </ul>
        </div>
      </div>

      <!-- # Main Section -->
      <div class="main">
        <h4>🤖 Android</h4>
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

      <!-- # CI/CD Section -->
      <div class="right">
        <div class="section" aria-label="Latest">
          <h3>CI/CD</h3>
          <ul class="list">
            <li class="item"><a href="#">Storms bring early mountain snow</a><div class="meta">9m ago</div></li>
            <li class="item"><a href="#">UW plans new AI research hub</a><div class="meta">21m ago</div></li>
            <li class="item"><a href="#">New Seattle bakery draws long lines</a><div class="meta">36m ago</div></li>
            <li class="item"><a href="#">WSDOT updates I-5 weekend closures</a><div class="meta">1h ago</div></li>
            <li class="item"><a href="#">Kraken make roster cuts ahead of opener</a><div class="meta">1h ago</div></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- # Backend Services Section -->
  <section class="hscroll" aria-label="Featured">
    <h2 class="hscroll-title">Backend Services</h2>
    <div class="hrow">
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Ferry cuts ripple across islands</a></h4>
          <p class="sum">What the seasonal schedule change means for commuters.</p>
          <div class="meta">12m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">UW unveils new AI research hub</a></h4>
          <p class="sum">A public–private partnership aims to accelerate breakthroughs.</p>
          <div class="meta">22m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Kraken trim roster ahead of opener</a></h4>
          <p class="sum">Five prospects reassigned after pre-season finale.</p>
          <div class="meta">35m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Light rail extension: what’s next</a></h4>
          <p class="sum">Key stations and timelines for the north–south corridor.</p>
          <div class="meta">48m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Downtown housing conversions grow</a></h4>
          <p class="sum">Developers pitch new life for older office towers.</p>
          <div class="meta">1h ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Ferry cuts ripple across islands</a></h4>
          <p class="sum">What the seasonal schedule change means for commuters.</p>
          <div class="meta">12m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">UW unveils new AI research hub</a></h4>
          <p class="sum">A public–private partnership aims to accelerate breakthroughs.</p>
          <div class="meta">22m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Kraken trim roster ahead of opener</a></h4>
          <p class="sum">Five prospects reassigned after pre-season finale.</p>
          <div class="meta">35m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Light rail extension: what’s next</a></h4>
          <p class="sum">Key stations and timelines for the north–south corridor.</p>
          <div class="meta">48m ago</div>
        </div>
      </article>
      <article class="card">
        <div class="img" role="img" aria-label="placeholder image"></div>
        <div class="body">
          <h4 class="title"><a href="#">Downtown housing conversions grow</a></h4>
          <p class="sum">Developers pitch new life for older office towers.</p>
          <div class="meta">1h ago</div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>

:root {
  --gutter: 24px;
  --maxw: 1160px;
  --left: #e3f2fd;
  --main: #f1f8e9;
  --right: #fff3e0;
}

html, body { height: 100%; }
body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background: #fff; }

.container { max-width: var(--maxw); margin: 0 auto; padding: 16px; }

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gutter);
}

.left { background: var(--left); min-height: 300px; }
.main { background: var(--main); min-height: 300px; }
.right { background: var(--right); min-height: 300px; }

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
.section { padding: 12px; }
.section h3 { margin: 0 0 8px; font: 700 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
.list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
.list .item a { font-weight: 600; text-decoration: none; }
.meta { color: #ffffff; font-size: 12px; margin-top: 2px; }
.hero { padding: 12px; }
.hero-figure { width: 100%; aspect-ratio: 16/9; background: #dfe6ef; border: 1px solid #e6e6e6; }
.hero h1 { margin: 10px 0 6px; font-family: Georgia, "Times New Roman", Times, serif; font-size: clamp(22px, 4.2vw, 36px); line-height: 1.12; }
.hero .dek { color: #ff0000; font-size: 15px; }
.articles { padding: 12px; display: grid; gap: 16px; }
.article h4 { margin: 0 0 4px; font: 700 17px/1.25 Georgia, "Times New Roman", Times, serif; }
.article p { margin: 0; color: #333; font-size: 15px; }

.section h3 { margin: 0 0 8px; font: 700 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;  }
.list .item a { font-weight: 600; text-decoration: none; }
.meta { color: #666; font-size: 12px; margin-top: 2px; }
.hero h1 { margin: 10px 0 6px; font-family: Georgia, "Times New Roman", Times, serif; font-size: clamp(22px, 4.2vw, 36px); line-height: 1.12; }
.hero .dek { color: #333; font-size: 15px; }
.article h4 { margin: 0 0 4px; font: 700 17px/1.25 Georgia, "Times New Roman", Times, serif; }
.article p { margin: 0; color: #333; font-size: 15px; }
/* === Added: Horizontally scrollable news strip === */
.hscroll { margin-top: 24px; margin-bottom: 36px;}
.hscroll-title { margin: 0 0 8px; font: 700 20px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; letter-spacing: .2px; padding: 0 4px; text-align: start; justify-content: start; }
.hrow { display: flex; gap: 14px; overflow-x: auto; -webkit-overflow-scrolling: touch; padding: 6px 4px 12px; scroll-snap-type: x mandatory; }
.card { flex: 0 0 auto; width: clamp(240px, 70vw, 320px); background: #1e1e1e; border: 1px solid #e6e6e6; border-radius: 1px; scroll-snap-align: start; }
.card .img { width: 100%; aspect-ratio: 16/9; background: #1e1e1e; border-bottom: 1px solid #e6e6e6; }

</style>