<template>
  <div v-for="article of articles">
    <NewsCard :id="article.id" />
  </div>
</template>

<script setup lang="ts">
import { articles } from "../data/articles";
import NewsCard from "../components/NewsCard.vue";
</script>
