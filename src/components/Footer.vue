<template>
  <footer>
    <section class="column--container">
      <article>
        <p>Artemis</p>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">Over ons</router-link>
        <router-link :to="{ name: 'Adopt' }">Adoptie</router-link>
        <router-link :to="{ name: 'Donate' }">Doneren</router-link>
      </article>

      <article>
        <p>Laatste Nieuws</p>
        <router-link v-for="article in articles.slice(0, 3)" :to="{ name: 'Article', params: { id: article.id } }">{{ article.title }}</router-link>
      </article>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { articles } from "../data/articles";
</script>

<style lang="scss">
@import "../styles/variables.scss";

footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3rem 0;
  color: $title-color;

  article {
    display: flex;
    flex-direction: column;
  }

  p {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  a {
    line-height: 1.6;
    width: max-content;
  }

  .router-link-exact-active {
    font-weight: 600;
    text-decoration: underline;
  }
}
</style>
