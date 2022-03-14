<template>
  <Breadcrumbs>Adopteren</Breadcrumbs>
  <section class="container">
    <div class="filter--container">
      <h2>Filters</h2>
      <button v-for="filter in filters()" :class="{ active: selectedFilters.includes(filter) }" @click="toggleFilter(filter)">{{ filter }}</button>
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
import { pets } from "../data/pets";

const selectedFilters: Ref<string[]> = ref([]);

function toggleFilter(filter: string) {
  if (selectedFilters.value.includes(filter)) selectedFilters.value.splice(selectedFilters.value.indexOf(filter), 1);
  else selectedFilters.value.push(filter);
}

const filters = () => [...new Set(pets.map((item) => item.filter))];
const filteredPets = () => pets.filter((item) => !selectedFilters.value.length || selectedFilters.value.includes(item.filter));
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.container {
  display: grid;
  grid-template-columns: auto 1fr;
}

.filter--container {
  padding-right: 3rem;
  min-width: 12.5rem;

  h2 {
    padding-bottom: 1rem;
  }

  button {
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    display: block;
    width: 100%;

    text-align: left;
    line-height: 1;
    font-weight: 500;
    color: $text-color;
    background-color: white;
    cursor: pointer;

    transition: background-color 100ms ease, border-color 100ms ease;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;

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
}

.card--container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  margin: -0.75rem;

  & > * {
    margin: 0.75rem;
  }
}
</style>
