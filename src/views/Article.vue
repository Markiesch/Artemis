<template>
  <section v-if="article">
    <h2>{{ article.title }}</h2>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { articles } from "../data/articles";

const route = useRoute();
const router = useRouter();

const article = articles.find((item) => item.id === +route.params.id);
if (!article) router.push({ name: "404" });
</script>
