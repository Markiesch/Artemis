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
@use "./styles/abstracts/mixins" as *;
@use "./styles/base/typography";

$themeColor: $clr-primary-400;
$tooltipFontSize: 1.25rem;
$tooltipPadding: 0.3em 0.75em;
$tooltipArrow: 1rem;
@import "vue-slider-component/lib/theme/default.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

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

a {
  text-decoration: none;
  color: inherit;
}
</style>
