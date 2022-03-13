<template>
  <section>
    <h1>Wij willen samen het verschil maken, met u</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore, atque earum doloremque saepe voluptas.</p>
    <div class="card--container">
      <div v-for="(option, index) in options" :class="{ active: activeIndex === index }" @click="activeIndex = index">
        <p>€{{ option }}</p>
      </div>
    </div>
    <button @click="donate">Doneer nu</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const options = [10, 25, 50, 100];
const activeIndex = ref(1);

function donate() {
  alert(`Bedankt voor de €${options[activeIndex.value]} donatie!`);
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

section {
  text-align: center;
}

.card--container {
  padding: 4rem 0 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  margin: -1rem;

  div {
    margin: 1rem;
    padding: 2rem;

    border-radius: 0.5rem;
    background-color: $primary-accent-color;
    color: $title-color;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
  }

  .active {
    background-color: $primary-color;
    color: white;
  }
}

h1 {
  color: $primary-color;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  padding-top: 1em;
  padding-bottom: 0.5em;
}

button {
  display: inline-block;
  padding: 1rem 1.5rem;
  margin-top: 2rem;
  cursor: pointer;

  color: white;
  background-color: $secondary-color;
  border: none;
  border-radius: 5rem;

  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1;
}
</style>
