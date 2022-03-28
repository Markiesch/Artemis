<template>
  <div class="slider--container">
    <div :style="`transform: translateX(-${sliderIndex * 100}%)`" class="slider">
      <Image v-for="item in items" width="1440" height="200" :src="item.image" :alt="item.alt" />
    </div>
  </div>
  <div class="controller--container">
    <button :aria-label="`naar slide ${index + 1}`" type="button" v-for="(_, index) in items" :class="{ active: index === sliderIndex }" @click="setSliderIndex(index)"></button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Image from "./Image.vue";

interface IItem {
  image: string;
  alt: string;
}

const items: IItem[] = [
  { image: "slider1", alt: "duitse herder" },
  { image: "slider2", alt: "twee honden die weg kijken" },
  { image: "slider3", alt: "twee blije rennende honden" },
];
let interval: number;
let sliderIndex = ref(0);

function setSliderIndex(index: number) {
  sliderIndex.value = index;
  clearInterval(interval);
  createInterval();
}

function createInterval() {
  interval = setInterval(() => {
    setSliderIndex(sliderIndex.value > items.length - 2 ? 0 : sliderIndex.value + 1);
  }, 5000);
}
createInterval();
</script>

<style lang="scss">
@use "../styles/abstracts/variables" as *;

.slider--container {
  overflow: hidden;
  border-radius: 1rem;
  position: relative;

  .slider {
    display: flex;
    transition: transform 300ms ease;
  }

  picture {
    flex: 1 0 100%;
    width: 100%;
    height: auto;
    max-height: 40rem;
  }
}

.controller--container {
  display: flex;
  justify-content: center;

  button {
    border: none;
    width: 1rem;
    height: 1rem;
    margin: 1rem 0.25rem;
    background-color: $clr-secondary-100;
    border-radius: 50%;
    transition: background-color 300ms ease;
  }

  .active {
    background-color: $clr-secondary-400;
  }
}
</style>
