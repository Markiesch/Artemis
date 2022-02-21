<template>
  <Navigation />
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";

const root = document.documentElement;

function updateScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  root.style.setProperty("--scroll", -scrollTop + "px");
}

updateScroll();
window.addEventListener("scroll", updateScroll);
</script>

<style lang="scss">
:root {
  --primary-color: #eb7252;
  --secondary-color: #144739;
  --text-color: hsla(0, 0%, 0%, 0.7);
  --nav-height: 5rem;
  --scroll: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

nav,
section {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
