<template>
  <section>
    <h1>404</h1>
    <p>De opgegeven URL kon niet worden gevonden</p>
    <div class="link--container">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Adopt' }">Adopteren</router-link>
      <router-link :to="{ name: 'Donate' }">Doneren</router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../styles/pages/notFound";
</style>
