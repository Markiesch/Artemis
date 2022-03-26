<template>
  <div @mouseover="focus" class="range-slider">
    <div class="slider__background--active" :style="`width: ${modelValue / (max / 100)}%`"></div>
    <div class="slider__background"></div>
    <div class="thomb" :style="`left: ${modelValue / (max / 100)}%`"></div>
    <input v-model="modelValue" type="range" :min="min" :max="max" class="slider" @input="updateValue" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ min: number; max: number; modelValue: number }>();
const emit = defineEmits(["update:modelValue"]);

function updateValue() {
  emit("update:modelValue", +props.modelValue);
}

function focus() {
  window.blur();
}
</script>

<style scoped lang="scss">
@use "../styles/abstracts/variables" as *;

$slider-height: 1rem;

.range-slider {
  position: relative;
  height: $slider-height;
}

.slider__background,
.slider__background--active,
.thomb,
input {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(-50%);
}

input {
  opacity: 0;
  height: 100%;
  cursor: pointer;
}

.slider__background--active,
.thomb {
  transition: 100ms ease-in-out;
  transition-property: left width;
}

.thomb {
  width: $slider-height;
  height: $slider-height;
  background-color: white;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.6);
  border-radius: $slider-height;
  transform: translate(-50%, -50%);
}

.slider__background,
.slider__background--active {
  background-color: $clr-neutral-100;
  border-radius: 0.25rem;
  height: calc($slider-height / 2);
}

.slider__background--active {
  background-color: $clr-primary-400;
}
</style>
