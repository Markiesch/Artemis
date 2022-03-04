<template>
  <div class="background"></div>
  <Navigation />
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
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
section {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

.background {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient($primary-accent-color, transparent);
}
</style>
