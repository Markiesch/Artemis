<template>
  <Breadcrumbs>Contact</Breadcrumbs>

  <section>
    <div id="map"></div>
  </section>

  <section class="form--section column--container">
    <article>
      <h2 class="section--title">Neem contact op</h2>
      <p>Artemis</p>
      <p>Onderwijsboulevard 3</p>
      <p>5223 DE 's-Hertogenbosch</p>
      <p>Nederland, EU</p>
    </article>
    <form @submit.prevent>
      <div class="input--container">
        <label for="name">Voornaam</label>
        <input :class="{ error: nameError }" v-model="name" @blur="validateName" @input="nameError = ''" type="text" id="name" />
        <p>{{ nameError }}</p>
      </div>

      <div class="input--container">
        <label for="mail">E-mailadres</label>
        <input :class="{ error: mailError }" v-model="mail" @blur="validateMail" @input="mailError = ''" type="email" id="mail" />
        <p>{{ mailError }}</p>
      </div>

      <div class="input--container">
        <label for="phone">Telefoonnummer</label>
        <input :class="{ error: phoneError }" v-model="phone" @blur="validatePhone" @input="phoneError = ''" type="tel" id="phone" />
        <p>{{ phoneError }}</p>
      </div>
      <div class="input--container">
        <label for="message">Vraag/opmerking</label>
        <textarea :class="{ error: messageError }" v-model="message" @blur="validateMessage" @input="messageError = ''" id="message"></textarea>
        <p>{{ messageError }}</p>
      </div>

      <div class="checkbox--container">
        <input type="checkbox" id="news" />
        <label for="news">Nieuwsbrief ontvangen</label>
      </div>

      <button @click="validateForm">Versturen</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Map, Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Breadcrumbs from "../components/Breadcrumbs.vue";

onMounted(() => {
  const map = new Map({
    accessToken: "pk.eyJ1IjoibWFya2llc2NoIiwiYSI6ImNrZ2NrcjZpYTA1cGMyeXMxOTZmanJxY2UifQ.MM8Hw3wYN6FYoVnE4dO5yg",
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11?optimize=true",
    center: [5.287758, 51.690708],
    zoom: 8,
    maxZoom: 16,
  });

  map.on("load", () => {
    new Marker().setLngLat([5.287758, 51.690708]).addTo(map);
  });
});

const name = ref("");
const mail = ref("");
const phone = ref("");
const message = ref("");

const nameError = ref("");
const mailError = ref("");
const phoneError = ref("");
const messageError = ref("");

function validateForm() {
  if (!validateName() || !validateMail() || !validatePhone() || !validateMessage()) return;
  alert("Het bericht is verzonden");
}

function validateName() {
  nameError.value = "";

  if (!name.value.length) {
    nameError.value = "Naam is verplicht";
    return false;
  }

  if (name.value.length < 2) {
    nameError.value = "Naam moet uit minimaal 2 tekens bestaan";
    return false;
  }

  return true;
}

function validateMail() {
  mailError.value = "";

  if (!mail.value.length) {
    mailError.value = "Mail is verplicht";
    return false;
  }

  if (!mail.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    mailError.value = "Ongeldig emailadres";
    return false;
  }

  return true;
}

function validatePhone() {
  phoneError.value = "";

  if (!phone.value.length) {
    phoneError.value = "Telefoonnummer is verplicht";
    return false;
  }

  return true;
}

function validateMessage() {
  messageError.value = "";

  if (!message.value.length) {
    messageError.value = "Bericht is verplicht";
    return false;
  }

  if (message.value.length < 40) {
    messageError.value = "Bericht moet minimaal 40 karakters lang zijn";
    return false;
  }

  return true;
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

#map {
  height: 30rem;
  max-height: 70vh;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  margin-bottom: 4rem;
}

.form--section {
  h2 {
    color: $primary-color;
    padding-bottom: 1rem;
  }

  p {
    color: $text-color;
  }
}

form > * {
  max-width: 30rem;
  width: 100%;
}

.input--container {
  margin-bottom: 1rem;

  .error {
    border: 1px solid red;
  }

  label {
    font-weight: 600;
    cursor: pointer;
  }

  input,
  textarea {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 0.25rem;
    display: block;
    width: 100%;
    margin-top: 0.25rem;
  }

  p {
    color: red;
    font-size: 0.8rem;
  }
}

.checkbox--container {
  display: flex;
  align-items: center;
  padding: 0.5rem 0 1.5rem 0;

  input {
    margin-right: 0.5rem;
  }
}

textarea {
  resize: vertical;
  min-height: 5rem;
}

button {
  background-color: $primary-color;
  color: white;
  width: 100%;
  font-weight: 600;
  padding: 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
