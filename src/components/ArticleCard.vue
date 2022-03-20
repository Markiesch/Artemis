<template>
  <article v-if="article">
    <img :src="`/assets/${article.image}`" :alt="article.title" />
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

.date {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: rgb(245, 245, 245);
  color: $title-color;
  line-height: 1;
  border-radius: 0.25rem;
}

h2 {
  color: $primary-color;
  font-size: 1.75rem;
  line-height: 1.2;
}

.subtitle {
  margin: 0.75rem 0;
  color: $text-color;
  flex-grow: 1;
}

a {
  color: $secondary-color;
  text-decoration: underline;
}
</style>
