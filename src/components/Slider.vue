<template>
  <div class="slider--container">
    <div :style="`transform: translateX(-${sliderIndex * 100}%)`" class="slider">
      <div v-for="item in items" class="slider--item">
        <div class="image--container">
          <img src="../assets/hero.png" :alt="item" />
        </div>
      </div>
    </div>
  </div>
  <div class="controller--container">
    <div v-for="(_, index) in items" :class="{ active: index == sliderIndex }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ["foiajfoiajfia", "foiajfoiajfia"];

let sliderIndex = ref(0);

function decrease() {
  if (!sliderIndex.value) return (sliderIndex.value = items.length - 1);
  sliderIndex.value--;
}

function increase() {
  if (sliderIndex.value >= items.length - 1) return (sliderIndex.value = 0);
  sliderIndex.value++;
}
</script>

<style lang="scss">
.slider--container {
  overflow: hidden;
  border-radius: 1rem;

  .slider {
    display: flex;

    transition: transform 300ms ease;
  }

  .slider--item {
    height: 20rem;
    position: relative;
    flex: 1 0 100%;
  }

  .image--container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
