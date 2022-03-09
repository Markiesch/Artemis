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

<style>
.article--wrapper {
  display: flex;
  margin: -1rem;
}

article {
  flex: 1 1 20rem;
  margin: 1rem;
}
</style>
