<template>
  <div class="card__container">
    <article class="card" v-for="article of articles">
      <img class="card__image" :src="`/assets/news/${article.image}`" :alt="article.title" />
      <div class="card__details">
        <p class="card__details__date">{{ article.date }}</p>
        <h2 class="card__details__title">{{ article.title }}</h2>
        <p class="card__details__subtitle">{{ article.subtitle }}</p>
        <router-link class="card__details__cta" :to="{ name: 'Article', params: { id: article.id } }">Lees verder</router-link>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { IArticle } from "../data/articles";
defineProps<{ articles: IArticle[] }>();
</script>

<style lang="scss" scoped>
@use "../styles/abstracts/mixins" as *;
@use "../styles/abstracts/variables" as *;

.card__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  margin: -1rem;

  @include mobile {
    display: block;
  }
}

.card {
  margin: 1rem;
  display: grid;
  grid-template-rows: auto 1fr;

  &__image {
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    display: block;
    max-height: 15rem;
    object-fit: cover;
  }

  &__details {
    padding: 1.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
    border: thin solid $clr-neutral-200;
    border-top: none;
    display: flex;
    flex-direction: column;

    &__date {
      margin-bottom: 1rem;
      width: max-content;
      padding: 0.75rem;
      background-color: rgb(245, 245, 245);
      color: $clr-neutral-800;
      line-height: 1;
      border-radius: 0.25rem;
    }

    &__title {
      color: $clr-primary-400;
      font-size: 1.75rem;
      line-height: 1.2;
    }

    &__subtitle {
      margin: 0.75rem 0;
      flex-grow: 1;
    }

    &__cta {
      color: $clr-secondary-400;
      text-decoration: underline;
      width: max-content;
    }
  }
}
</style>
