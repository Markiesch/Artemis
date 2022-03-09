<template>
  <div v-if="article">
    <Breadcrumbs label="artikel">
      <template #default>{{ article.title }}</template>
      <template #subtitle>
        <p class="breadcrumbs--subtitle">
          <span>{{ article.date }}</span> door <a href="">{{ article.author }}</a>
        </p>
      </template>
    </Breadcrumbs>
    <section class="article--section">
      <img :src="`/assets/${article.image}`" alt="" />
    </section>
  </div>
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

<style lang="scss">
.breadcrumbs--subtitle {
  margin-top: 1.5rem;
  opacity: 0.9;

  span {
    font-weight: 600;
  }
}

.article--section {
  padding-top: 2rem;

  img {
    width: 100%;
    max-height: 25rem;
    border-radius: 0.25rem;
    object-fit: cover;
    display: block;
  }
}
</style>
