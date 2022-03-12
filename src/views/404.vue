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
@import "../styles/variables.scss";

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 7.5rem;
  color: $title-color;
}

p {
  color: $text-color;
}

.link--container {
  margin-top: 1rem;

  a {
    margin: 0.5rem;
    padding: 1rem;
    line-height: 1;
    display: inline-block;
    background-color: rgb(240, 240, 240);
    border-radius: 0.5rem;
  }
}
</style>
