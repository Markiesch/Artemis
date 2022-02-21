<template>
  <nav>
    <div>Artemis</div>
    <div class="link--container">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">Overzicht</router-link>
      <router-link :to="{ name: 'Home' }">Nieuws</router-link>
      <router-link :to="{ name: 'Home' }">Over ons</router-link>
    </div>
    <div>Doneren</div>
  </nav>
</template>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;

  .link--container {
    a {
      padding: 1rem;
    }
  }
}
</style>
