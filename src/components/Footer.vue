<template>
  <div class="border"></div>
  <footer class="text-neutral-800">
    <Row>
      <article>
        <p>Artemis</p>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">Over ons</router-link>
        <router-link :to="{ name: 'Adopt' }">Adoptie</router-link>
        <router-link :to="{ name: 'Donate' }">Doneren</router-link>
      </article>

      <article>
        <p>Laatste Nieuws</p>
        <router-link v-for="article in articles.slice(0, 3)" :to="{ name: 'Article', params: { id: article.id } }">{{ article.title }}</router-link>
      </article>
    </Row>
  </footer>
</template>

<script setup lang="ts">
import { articles } from "../data/articles";
import Row from "./Row.vue";
</script>

<style scoped lang="scss">
@use "../styles/layout/footer";
</style>
