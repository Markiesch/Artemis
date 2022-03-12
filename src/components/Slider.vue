<template>
  <div class="slider--container">
    <div :style="`transform: translateX(-${sliderIndex * 100}%)`" class="slider">
      <div v-for="item in items" class="slider--item">
        <img :src="`assets/${item}.jpg`" :alt="item" />
      </div>
    </div>
  </div>
  <div class="controller--container">
    <span v-for="(_, index) in items" :class="{ active: index === sliderIndex }" @click="setSliderIndex(index)"></span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ["slider1", "slider2", "slider3"];

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
@import "../styles/variables.scss";

.slider--container {
  overflow: hidden;
  border-radius: 1rem;
  position: relative;

  .slider {
    display: flex;
    transition: transform 300ms ease;
  }

  .slider--item {
    height: 35rem;
    position: relative;
    flex: 1 0 100%;
  }

  img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.controller--container {
  display: flex;
  justify-content: center;

  span {
    width: 1rem;
    height: 1rem;
    margin: 1rem 0.25rem;
    background-color: $secondary-accent-color;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 300ms ease;
  }

  .active {
    background-color: $secondary-color;
  }
}
</style>
