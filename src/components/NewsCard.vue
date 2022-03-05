<template>
  <article v-if="article">
    <h2>{{ article.title }}</h2>
  </article>
</template>

<script setup lang="ts">
import { articles } from "../data/articles";

const { id } = defineProps<{ id: number }>();

const article = articles.find((item) => item.id === id);
</script>
