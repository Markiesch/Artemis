<template>
  <article>
    <img :src="`/assets/pets/${pet.image}`" :alt="pet.name" />
    <div class="overlay">
      <h2 class="section--title">{{ pet.name }}</h2>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M480 .0002l-112.4 .0001c-21.38 0-32.09 25.85-16.97 40.97l29.56 29.56l-27.11 27.11C326.1 76.85 292.7 64 256 64c-88.37 0-160 71.63-160 160c0 77.4 54.97 141.9 128 156.8v19.22H192c-8.836 0-16 7.162-16 16v31.1c0 8.836 7.164 16 16 16l32 .0001v32c0 8.836 7.164 16 16 16h32c8.838 0 16-7.164 16-16v-32l32-.0001c8.838 0 16-7.164 16-16v-31.1c0-8.838-7.162-16-16-16h-32v-19.22c73.03-14.83 128-79.37 128-156.8c0-28.38-8.018-54.65-20.98-77.77l30.45-30.45l29.56 29.56C470.1 160.5 496 149.8 496 128.4V16C496 7.164 488.8 .0002 480 .0002zM256 304c-44.11 0-80-35.89-80-80c0-44.11 35.89-80 80-80c44.11 0 80 35.89 80 80C336 268.1 300.1 304 256 304z"
          />
        </svg>
        <span>{{ pet.gender }}</span>
      </p>

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
    padding: 1.5rem;

    opacity: 0;
    transform: translateY(25%);
    transition: transform 300ms ease, opacity 300ms ease;
  }

  &:hover .overlay {
    opacity: 1;
    transform: translateY(0);
  }

  p {
    display: flex;
    align-items: center;
  }

  svg {
    height: 1.1rem;
    margin-right: 0.5rem;
    fill: currentColor;
  }
}
</style>
