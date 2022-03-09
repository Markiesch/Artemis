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
@import "./styles/variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

nav,
section,
footer {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
