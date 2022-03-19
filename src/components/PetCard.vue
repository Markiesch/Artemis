<template>
  <article>
    <img :src="`/assets/pets/${pet.image}`" :alt="pet.name" />
    <div class="overlay">
      <p class="breed">{{ pet.breed }}</p>
      <h2 class="section--title">{{ pet.name }}</h2>
      <p>{{ pet.gender }} - {{ pet.size }} - {{ pet.color }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { IPet } from "../data/pets";

defineProps<{ pet: IPet }>();
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

$card-padding: 1.5rem;

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
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7) 60%);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: $card-padding;

    opacity: 0;
    transform: translateY(25%);
    transition: transform 300ms ease, opacity 300ms ease;
  }

  &:hover .overlay {
    opacity: 1;
    transform: translateY(0);
  }

  p {
    opacity: 0;
  }

  &:hover p {
    opacity: 1;
    transition: opacity 300ms ease 200ms;
  }

  .breed {
    position: absolute;
    top: 0.5rem;
    left: 0;
    min-width: 50%;
    font-weight: 500;
    padding: 0.5rem $card-padding;
    border-radius: 0 0.5rem 0.5rem 0;
    color: white;
    background-color: $primary-color;
  }

  svg {
    height: 1.1rem;
    margin-right: 0.5rem;
    fill: currentColor;
  }
}
</style>
