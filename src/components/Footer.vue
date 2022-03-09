<template>
  <div class="footer-wrapper">
    <footer class="column--container">
      <article>
        <p>Artemis</p>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">Over ons</router-link>
        <router-link :to="{ name: 'Overzicht' }">Adoptie</router-link>
        <!-- <router-link :to="{ name: '' }">Contact</router-link> -->
      </article>

      <article>
        <h2>Abonneer op onze nieuwsbrief</h2>
        <input placeholder="Email adres" type="text" />
        <button>Abonneer</button>
      </article>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "../styles/variables.scss";

.footer-wrapper {
  background-color: $primary-color;
  padding: 3rem 0;
}

footer {
  color: white;

  p {
    font-weight: 600;
    margin-bottom: 1.5rem;
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
