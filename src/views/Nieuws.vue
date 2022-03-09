<template>
  <Breadcrumbs>Nieuws</Breadcrumbs>
  <section class="article--section">
    <div v-for="article of articles">
      <NewsCard :id="article.id" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { articles } from "../data/articles";
import NewsCard from "../components/NewsCard.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
</script>

<style lang="scss">
.article--section {
  display: flex;

  article {
    flex: 1 1 20rem;
  }
}
</style>
