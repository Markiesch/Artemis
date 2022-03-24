<template>
  <section class="breadcrumbs">
    <div class="breadcrumbs__path">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <svg viewBox="0 0 192 512">
        <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
      </svg>
      <span v-if="props.label">{{ props.label }}</span>
      <span v-else><slot /></span>
    </div>
    <h2 class="breadcrumbs__title section__title"><slot /></h2>
    <slot name="subtitle" />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ label?: string }>();
</script>

<style scoped lang="scss">
@use "../styles/layout/breadcrumbs";
</style>
