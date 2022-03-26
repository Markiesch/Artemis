<template>
  <Breadcrumbs>Adopteren</Breadcrumbs>
  <section class="container">
    <div class="filter__container">
      <h2>Filters</h2>
      <button v-for="filter in filters()" :class="{ active: selectedFilters.includes(filter) }" @click="toggleFilter(filter)" type="button" :aria-label="`filter op ${filter}`">{{ filter }}</button>
    </div>
    <div class="card__container">
      <PetCard class="card" v-for="pet in filteredPets()" :pet="pet" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import PetCard from "../components/PetCard.vue";
import { pets } from "../data/pets";

const selectedFilters = ref(<string[]>[]);

function toggleFilter(filter: string) {
  if (selectedFilters.value.includes(filter)) selectedFilters.value.splice(selectedFilters.value.indexOf(filter), 1);
  else selectedFilters.value.push(filter);
}

const filters = () => [...new Set(pets.map((item) => item.filter))];
const filteredPets = () => pets.filter((item) => !selectedFilters.value.length || selectedFilters.value.includes(item.filter));
</script>

<style scoped lang="scss">
@use "../styles/pages/adopt";
</style>
