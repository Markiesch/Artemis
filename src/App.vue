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
