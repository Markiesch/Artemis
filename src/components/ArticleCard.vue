<template>
  <article v-if="article">
    <img :src="`/assets/${article.image}`" :alt="article.title" />
    <div class="details">
      <p class="date">{{ article.date }}</p>
      <h2>{{ article.title }}</h2>
      <p>{{ article.subtitle }}</p>
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

h2 {
  color: $secondary-color;
}

p {
  margin: 0.75rem 0;

  color: $text-color;
}

a {
  color: $primary-color;
  text-decoration: underline;
}

.date {
  background-color: rgb(240, 240, 240);
  display: inline-block;
  padding: 0.75rem;
  line-height: 1;
  border-radius: 0.25rem;
}
</style>
