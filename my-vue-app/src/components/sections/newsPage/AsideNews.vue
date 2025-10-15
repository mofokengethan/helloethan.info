<script setup>

const props = defineProps({
  asideType: String,

})
</script>

<template>
  <div v-if="props.asideType === 'left'">
    <div class="left">
      <div class="section">
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
  </div>
  <div v-else>
    <div class="right">
      <div class="section">
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
.left { background: var(--left); min-height: 300px; }
.right { background: var(--right); min-height: 300px; }
.section { padding: 12px; }
.section h3 { margin: 0 0 8px; font: 700 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
.list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
.list .item a { font-weight: 600; text-decoration: none; }
.meta { color: #ffffff; font-size: 12px; margin-top: 2px; }
.article h4 { margin: 0 0 4px; font: 700 17px/1.25 Georgia, "Times New Roman", Times, serif; }
.article p { margin: 0; color: #ffffff; font-size: 15px; }
.section h3 { margin: 0 0 8px; font: 700 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;  }
.list .item a { font-weight: 600; text-decoration: none; }
</style>