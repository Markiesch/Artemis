<template>
  <section class="hero">
    <h1>Geen enkel dier is overbodig</h1>
    <p>Ieder dier in nood is welkom in onze opvang. Wij vinden dat ieder dier geholpen moet worden, ongeacht waar het dier geboren is, een ziekte of handicap heeft.</p>

    <router-link :to="{ name: 'Home' }">Verander nu een leven</router-link>
  </section>
</template>

<style lang="scss">
.hero {
  min-height: calc(100vh - var(--nav-height) * 2);

  & > * {
    max-width: 40rem;
  }

  a {
    color: var(--primary-color);
  }
}
</style>
