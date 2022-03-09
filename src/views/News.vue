<template>
  <Breadcrumbs>Nieuws</Breadcrumbs>
  <section>
    <ArticleList :articles="articles" />
  </section>
</template>

<script setup lang="ts">
import { articles } from "../data/articles";
import ArticleList from "../components/ArticleList.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
</script>
