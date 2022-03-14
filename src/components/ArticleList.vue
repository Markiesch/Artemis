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
@import "../styles/mixins.scss";

.article--wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  margin: -1rem;

  article {
    margin: 1rem;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  @include mobile {
    display: block;
  }
}
</style>
