<template>
  <div class="card">
    <img class="card__image" :src="`/assets/pets/${pet.image}`" :alt="pet.name" />
    <div class="card__overlay">
      <p class="breed">{{ pet.breed }}</p>
      <h2 class="section--title">{{ pet.name }}</h2>
      <p>{{ pet.gender }} - {{ pet.size }} - {{ pet.color }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPet } from "../data/pets";

defineProps<{ pet: IPet }>();
</script>

<style scoped lang="scss">
@use "../styles/abstracts/variables" as *;

$card-padding: 1.5rem;

.card {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    color: white;
    flex-direction: column;
    justify-content: flex-end;
    padding: $card-padding;
    background: linear-gradient(transparent, rgba(black, 0.7) 60%);

    opacity: 0;
    transform: translateY(25%);
    transition: transform 300ms ease, opacity 300ms ease;
  }

  &:hover &__overlay {
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
    background-color: $clr-primary-400;
  }
}
</style>
