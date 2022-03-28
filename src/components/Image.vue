<template>
  <picture v-bind="$attrs">
    <source :srcset="`/assets/${src}.webp`" type="image/webp" />
    <source :srcset="`/assets/${src}.jpg`" type="image/jpeg" />
    <img :src="`/assets/${src}.jpg`" :alt="alt" />
  </picture>
</template>

<script setup lang="ts">
defineProps<{ src: string; alt: string }>();
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
