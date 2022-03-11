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
@import "./styles/typography.scss";
@import "./styles/variables.scss";
@import "./styles/mixins.scss";

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
}

main {
  padding-bottom: 6rem;
}

nav,
section,
footer {
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

.column--container {
  display: flex;

  @include tablet {
    flex-direction: column;
  }

  & > * {
    flex: 1 1 20rem;
  }
}
</style>
