<template>
  <div class="article--wrapper">
    <ArticleCard v-for="article of articles" :id="article.id" />
  </div>
</template>

<script setup lang="ts">
import { IArticle } from "../data/articles";
import ArticleCard from "./ArticleCard.vue";
defineProps<{ articles: IArticle[] }>();
</script>

<style lang="scss">
.article--wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;

  article {
    flex: 1 1 25rem;
    margin: 1rem;
  }
}
</style>
