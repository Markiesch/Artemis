<template>
  <Navigation />
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
</style>
