<template>
  <article>
    <img :src="`/assets/pets/${pet.image}`" :alt="pet.name" />
    <div class="overlay">
      <h2 class="section--title">{{ pet.name }}</h2>
      <p>{{ pet.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { IPet } from "../data/pets";

defineProps<{ pet: IPet }>();
</script>

<style scoped lang="scss">
article {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;

    opacity: 0;
    transform: translateY(25%);
    transition: transform 300ms ease, opacity 300ms ease;
  }

  &:hover .overlay {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
