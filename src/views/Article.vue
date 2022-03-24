<template>
  <Breadcrumbs v-if="article" label="artikel">
    <template #default>{{ article.title }}</template>
    <template #subtitle>
      <p class="breadcrumbs--subtitle">
        <span>{{ article.date }}</span> door <a href="">{{ article.author }}</a>
      </p>
    </template>
  </Breadcrumbs>

  <section v-if="article">
    <img :src="`/assets/news/${article.bigImage}`" alt="" />
    <p class="content" v-for="text in article.content">{{ text }}</p>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { articles } from "../data/articles";
import Breadcrumbs from "../components/Breadcrumbs.vue";

const route = useRoute();
const router = useRouter();

const article = articles.find((item) => item.id === +route.params.id);
if (!article) router.push({ name: "404" });
</script>

<style lang="scss" scoped>
@use "../styles/abstracts/variables" as *;

.breadcrumbs--subtitle {
  margin-top: 1.5rem;
  opacity: 0.9;

  span {
    font-weight: 600;
  }
}

img {
  width: 100%;
  max-height: 25rem;
  border-radius: 0.5rem;
  object-fit: cover;
  display: block;
}

.content {
  padding-top: 1rem;
  line-height: 1.6;
  max-width: 120ch;
}
</style>
