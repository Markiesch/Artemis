<template>
  <article v-if="article">
    <img :src="`/assets/${article.image}`" :alt="article.title" />
    <div class="details">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
      <router-link :to="{ name: 'Article', params: { id: article.id } }">Lees verder</router-link>
    </div>
  </article>
</template>

<script setup lang="ts">
import { articles } from "../data/articles";

const { id } = defineProps<{ id: number }>();

const article = articles.find((item) => item.id === id);
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

img {
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  display: block;
  max-height: 15rem;
  object-fit: cover;
}

.details {
  padding: 1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  border: thin solid rgba(0, 0, 0, 0.2);
  border-top: none;
}

p {
  margin: 0.75rem 0;
}

a {
  color: $primary-color;
  text-decoration: underline;
}
</style>
