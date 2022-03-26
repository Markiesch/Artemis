<template>
  <Navigation />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">
@use "./styles/abstracts/variables" as *;
@use "./styles/base/typography";
@use "./styles/base/reset";

// Donate slider styling
$themeColor: $clr-primary-400;
$tooltipFontSize: 1.25rem;
$tooltipPadding: 0.3em 0.75em;
$tooltipArrow: 1rem;
@import "vue-slider-component/lib/theme/default.scss";

body {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: $clr-neutral-400;
}

h1 {
  color: $clr-neutral-800;
}

main {
  padding-bottom: 6rem;
}

nav,
section,
footer {
  width: 90%;
  max-width: 90rem;
  margin: 0 auto;
}
</style>
