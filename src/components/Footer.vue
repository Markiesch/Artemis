<template>
  <div class="footer-wrapper">
    <footer class="column--container">
      <article>
        <p>Artemis</p>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">Over ons</router-link>
        <router-link :to="{ name: 'Adopt' }">Adoptie</router-link>
        <router-link :to="{ name: 'Donate' }">Doneren</router-link>
      </article>

      <article>
        <p>Laatste Nieuws</p>
        <router-link v-for="article in articles" :to="{ name: 'Article', params: { id: article.id } }">{{ article.title }}</router-link>
      </article>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { articles } from "../data/articles";
</script>

<style lang="scss">
@import "../styles/variables.scss";

.footer-wrapper {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3rem 0;
}

footer {
  color: $title-color;

  p {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  a {
    display: block;
    line-height: 1.6;
  }

  .router-link-exact-active {
    font-weight: 600;
    text-decoration: underline;
  }

  input,
  button {
    display: block;
    width: 100%;
    max-width: 30rem;
    border-radius: 0.25rem;
    border: none;
    text-align: left;
    padding: 0.75em;
    font-size: 1rem;
  }

  input:focus {
    outline: none;
  }

  button {
    background-color: black;
    margin-top: 0.5rem;
    color: white;
    font-weight: 500;
  }
}
</style>
