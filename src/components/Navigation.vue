<template>
  <nav>
    <router-link :to="{ name: 'Home' }" class="logo">Artemis</router-link>
    <div class="link--container">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Overzicht' }">Overzicht</router-link>
      <router-link :to="{ name: 'Nieuws' }">Nieuws</router-link>
      <router-link :to="{ name: 'About' }">Over ons</router-link>
    </div>
    <router-link :to="{ name: 'Donate' }">Doneren</router-link>
  </nav>
</template>

<style lang="scss">
@import "../styles/variables.scss";

nav {
  height: $nav-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;

  .logo {
    font-weight: 600;
  }

  .link--container {
    a {
      padding: 1rem;
    }

    .router-link-active {
      font-weight: 600;
    }
  }
}
</style>
