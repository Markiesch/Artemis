<template>
  <article v-if="article">
    <img :src="`/assets/${article.image}`" :alt="article.title" />
    <div class="details">
      <div>
        <p class="date">{{ article.date }}</p>
      </div>
      <h2>{{ article.title }}</h2>
      <p style="flex-grow: 1">{{ article.subtitle }}</p>
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
  display: flex;
  flex-direction: column;
}

h2 {
  color: $primary-color;
  font-size: 1.75rem;
  line-height: 1.2;
}

p {
  margin: 0.75rem 0;
  color: $text-color;
}

a {
  color: $secondary-color;
  text-decoration: underline;
}

.date {
  background-color: rgb(245, 245, 245);
  display: inline-block;
  padding: 0.75rem;
  line-height: 1;
  border-radius: 0.25rem;
}
</style>
