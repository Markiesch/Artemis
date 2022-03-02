<template>
  <h2>Nieuwsartikel {{ id }}</h2>
</template>

<script setup lang="ts">
import router from "../router";

const id = router.currentRoute.value.params.id;
</script>
