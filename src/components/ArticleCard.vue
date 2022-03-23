<template>
  <article v-if="article">
    <img :src="`/assets/news/${article.image}`" :alt="article.title" />
    <div class="details">
      <div>
        <p class="date">{{ article.date }}</p>
      </div>
      <h2>{{ article.title }}</h2>
      <p class="subtitle">{{ article.subtitle }}</p>
      <router-link :to="{ name: 'Article', params: { id: article.id } }">Lees verder</router-link>
    </div>
  </article>
</template>

<script setup lang="ts">
import { articles } from "../data/articles";

const { id } = defineProps<{ id: number }>();

const article = articles.find((item) => item.id === id);
</script>

<style scoped lang="scss">
@use "../styles/abstracts/variables" as *;
</style>
