<template>
  <Breadcrumbs>Contact</Breadcrumbs>

  <section class="column--container">
    <article>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam ducimus officia mollitia, consequatur illo eveniet veniam similique iure ratione dignissimos nesciunt quis molestias optio
      voluptatum quo debitis eum explicabo.
    </article>
    <form>
      <label for="">Voornaam</label>
      <input type="text" />

      <label for="">E-mailadres</label>
      <input type="text" />

      <label for="">Telefoonnummer</label>
      <input type="text" />

      <label for="">Vraag/opmerking</label>
      <textarea></textarea>

      <button>Versturen</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import Breadcrumbs from "../components/Breadcrumbs.vue";
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

article + article {
  border-radius: 0.5rem;
  background-color: $primary-color;
}

label,
input,
textarea {
  display: block;
}

label {
  margin-bottom: 0.5rem;
}

button {
  background-color: white;
  color: black;
  line-height: 1;
  font-weight: 600;
  padding: 1rem;
}
</style>
