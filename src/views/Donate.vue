<template>
  <Breadcrumbs>Doneren</Breadcrumbs>

  <section>
    <p class="caption">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore alias, odit nulla magnam ipsum tenetur earum illo necessitatibus tempora debitis expedita praesentium quam esse sequi, eveniet
      deleniti possimus. Cumque nemo ad obcaecati recusandae, earum architecto officiis. Voluptatum debitis minima sed ut in, magni illum architecto error sunt culpa nesciunt rem modi! Repellendus
      quod, soluta amet architecto totam ex atque, autem ipsam, neque qui itaque exercitationem ea? Nemo aperiam sint quam.
    </p>
    <div class="wrapper">
      <article
        :style="`height: ${option.height}%; background-image: url('/assets/donate${index + 1}.jpg')`"
        v-for="(option, index) in options"
        :class="{ active: activeIndex === index }"
        @click="activeIndex = index"
      >
        <p>&euro;{{ option.amount }}</p>
        <div class="overlay"></div>
      </article>
    </div>
    <button @click="donate">Doneren</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

interface IOption {
  amount: number;
  height: number;
}

const options: IOption[] = [
  { amount: 10, height: 55 },
  { amount: 25, height: 70 },
  { amount: 50, height: 85 },
  { amount: 100, height: 100 },
];

const activeIndex = ref(1);

function donate() {
  alert(`Bedankt dat u €${options[activeIndex.value]} heeft gedoneerd!`);
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.wrapper {
  display: flex;
  align-items: flex-end;
  margin: -1rem;
  height: 80vh;
  max-height: 40rem;
}

.caption {
  color: $text-color;
  margin-bottom: 8rem;
  max-width: 120ch;
}

article {
  flex: 1 1 20rem;
  margin: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: rgb(240, 240, 240);
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;
  background-image: url("/assets/donate1.jpg");
  background-size: cover;
  background-position: center center;
  transition: transform 300ms ease;

  p {
    padding: 1rem;
    color: white;
    font-size: 2rem;
    font-weight: 700;
  }
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: linear-gradient(transparent, black);
  z-index: -1;
}

.active,
article:hover,
article:active {
  transform: translateY(-0.5rem);
}

.active .overlay {
  background: linear-gradient(transparent, $primary-color);
}

button {
  padding: 1rem;
  display: inline-block;
  border: none;
  border-radius: 0.25rem;
  background-color: $primary-color;
  color: white;
  margin-top: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
}
</style>
