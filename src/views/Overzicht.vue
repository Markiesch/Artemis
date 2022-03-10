<template>
  <Breadcrumbs>Overzicht</Breadcrumbs>
  <section>
    <Slider />
  </section>
  <section class="card--section">
    <div class="filters">
      <h2>Filters</h2>
      <button v-for="filter in filters()" class="filter--button" :class="{ active: selectedFilters.includes(filter) }" @click="toggleFilter(filter)">{{ filter }}</button>
    </div>
    <div class="card--container">
      <PetCard v-for="pet in filteredPets()" :pet="pet" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import PetCard from "../components/PetCard.vue";
import Slider from "../components/Slider.vue";
import { IPetFilter, pets } from "../data/pets";

const selectedFilters: Ref<string[]> = ref([]);

function toggleFilter(filter: IPetFilter) {
  if (selectedFilters.value.includes(filter)) selectedFilters.value.splice(selectedFilters.value.indexOf(filter), 1);
  else selectedFilters.value.push(filter);
}

const filters = () => [...new Set(pets.map((item) => item.filter))];
const filteredPets = () => pets.filter((item) => !selectedFilters.value.length || selectedFilters.value.includes(item.filter));
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.card--section {
  padding-top: 5rem;
}

.card--container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  margin: -1rem;

  article {
    margin: 1rem;
  }
}

.filters {
  margin-bottom: 2rem;
}

.filter--button {
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-block;
  border-radius: 0.25rem;
  padding: 0.75rem;
  line-height: 1;
  color: $text-color;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: background-color 100ms ease, border-color 100ms ease;

  &:hover,
  &:focus,
  &:focus-visible {
    border: 1px solid rgba(0, 0, 0, 0.8);
  }
}

.active {
  background-color: $primary-color;
  border-color: $primary-color;
  color: white;
}
</style>
