<template>
  <div class="article--wrapper">
    <div v-for="article of articles">
      <ArticleCard :id="article.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IArticle } from "../data/articles";
import ArticleCard from "./ArticleCard.vue";
defineProps<{ articles: IArticle[] }>();
</script>

<style lang="scss">
.article--wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  margin: -1rem;

  article {
    margin: 1rem;
  }
}
</style>
