<template>
  <Navigation />
  <router-view />
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  padding: 5rem;
  text-align: center;
}
</style>
