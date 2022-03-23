<template>
  <Breadcrumbs>Contact</Breadcrumbs>

  <section>
    <div id="map"></div>
  </section>

  <section class="form--section">
    <Row>
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
    </Row>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Map, Marker } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import Row from "../components/Row.vue";

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
@use "../styles/pages/contact";
</style>
