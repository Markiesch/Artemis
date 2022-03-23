<template>
  <div class="row" :style="`align-items: ${align}`">
    <slot class="test" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ align?: string }>();
</script>

<style lang="scss">
@use "../styles/abstracts/mixins" as *;

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: -1rem;

  & > * {
    margin: 1rem;
  }

  @include tablet {
    display: block;
  }
}
</style>
