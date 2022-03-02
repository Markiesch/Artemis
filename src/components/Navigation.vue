<template>
  <nav>
    <router-link :to="{ name: 'Home' }" class="logo">Artemis</router-link>
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
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);
  font-size: 1.25rem;

  .logo {
    font-weight: 600;
  }

  .link--container {
    a {
      padding: 1rem;
    }
  }
}
</style>
