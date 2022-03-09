<template>
  <section>
    <div class="breadcrumbs">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <svg viewBox="0 0 192 512">
        <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
      </svg>
      <span v-if="props.label">{{ props.label }}</span>
      <span v-else><slot /></span>
    </div>
    <h2><slot /></h2>
    <slot name="subtitle" />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ label?: string }>();
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

section {
  padding-top: 2rem;
  padding-bottom: 2.5rem;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  color: $title-color;

  a {
    font-weight: 600;
    color: $primary-color;

    &:hover + svg {
      transform: rotate(180deg);
    }
  }

  svg {
    height: 1rem;
    margin: 0 0.6rem;
    fill: currentColor;
    transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}

h2 {
  line-height: 1;
  color: $title-color;
  padding-top: 0.5rem;
  font-size: 2.75rem;
}
</style>
