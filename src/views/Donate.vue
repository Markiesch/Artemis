<template>
  <section class="donate__section">
    <h1 class="section__title--large">Wij kunnen samen met u het verschil maken</h1>
    <p>
      Door een bijdrage, klein of groot, maakt u het ons mogelijk om dieren op te vangen in de regio Den Bosch. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium commodi sed
      alias ipsa dignissimos excepturi similique voluptate. Eum, ducimus.
    </p>
    <div class="svg__container">
      <svg :style="`height: clamp(25%, ${amount / 2}%, 100%)`" viewBox="0 0 162 175" fill="none">
        <path
          d="M72.5038 4.22503C75.1029 2.78161 78.0269 2.02417 81 2.02417C83.9731 2.02417 86.8971 2.78161 89.4962 4.22503L155.253 40.7475C156.616 41.5056 157.752 42.6144 158.542 43.959C159.333 45.3036 159.75 46.8351 159.75 48.395V120.451C159.749 123.572 158.914 126.636 157.331 129.325C155.748 132.014 153.474 134.231 150.746 135.746L89.4962 169.784C86.8971 171.227 83.9731 171.985 81 171.985C78.0269 171.985 75.1029 171.227 72.5038 169.784L11.2537 135.746C8.52686 134.232 6.25428 132.016 4.67125 129.329C3.08823 126.641 2.2523 123.579 2.25 120.46V48.395C2.24994 46.8351 2.66687 45.3036 3.45763 43.959C4.24839 42.6144 5.38422 41.5056 6.7475 40.7475L72.5125 4.22503H72.5038Z"
          stroke-width="4"
        />
        <path d="M81 87V174.5M2.25 43.25L81 87L2.25 43.25ZM81 87L159.75 43.25L81 87Z" stroke-width="4" />
        <path d="M28.5 89.87L54.75 104.5M41.625 65.125L120.375 21.375L41.625 65.125Z" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>

    <RangeSlider :min="1" :max="300" v-model="amount" />
    <div class="selection__container">
      <button type="button" class="selection__item" :class="{ 'selection__item--active': amount == 15 }" @click="amount = 15">&euro;15</button>
      <button type="button" class="selection__item" :class="{ 'selection__item--active': amount == 30 }" @click="amount = 30">&euro;30</button>
      <button type="button" class="selection__item" :class="{ 'selection__item--active': amount == 100 }" @click="amount = 100">&euro;100</button>
      <div class="selection__item">
        <label for="amount">&euro;</label>
        <input min="1" type="number" id="amount" v-model="amount" />
      </div>
    </div>
    <div class="form__container" :class="{ show: showLastStep }">
      <h2 class="section__title--large">Nog één laatste stap</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium sit illo dolore tempore reprehenderit, sed vero commodi, quasi maxime nulla iure. A dolore harum ipsum omnis, autem
        aperiam tenetur?
      </p>
      <form class="input--container">
        <label for="name">Naam</label>
        <input :class="{ error: nameError }" v-model="name" @blur="validateName" @input="nameError = ''" type="text" id="name" />
        <p v-if="nameError">{{ nameError }}</p>
        <label for="emailadres">Emailadres</label>
        <input :class="{ error: mailError }" v-model="mail" @blur="validateMail" @input="mailError = ''" type="text" id="emailadres" />
        <p v-if="mailError">{{ mailError }}</p>

        <label for="message">Bericht (optioneel)</label>
        <textarea v-model="message" id="message"></textarea>
      </form>
    </div>
    <p v-if="showFeedbackMessage">Bedankt voor uw donatie!</p>
    <button type="submit" class="donate__button" @click="donate">Doneer &euro;{{ amount }}</button>
  </section>

  <section class="stats__section">
    <Row>
      <div class="donators__information">
        <h2 class="section__title--large">Donateurs die u voor waren</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, adipisci excepturi a porro hic ipsam incidunt soluta consequuntur iusto perspiciatis, quis saepe nihil. Ipsum officiis
          excepturi sint quisquam, libero numquam.
        </p>
        <div class="donation--container" v-for="donation in showAllDonators ? donations : donations.slice(0, 5)">
          <div class="svg--container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div>
            <p class="donator">{{ donation.donator }}</p>
            <p class="message">
              <span v-if="donation.message">{{ donation.message }}</span>
              <i v-else>Geen bericht</i>
            </p>
          </div>
          <p class="amount">&euro;{{ donation.amount }}</p>
        </div>
        <i v-if="showAllDonators"><button @click="showAllDonators = !showAllDonators">toon laatste 5</button></i>
        <i v-else>en {{ donations.length - 5 }} andere - <button type="button" @click="showAllDonators = !showAllDonators">toon alle donateurs</button></i>
      </div>

      <div class="donate--stats">
        <h3>&euro;{{ getTotal() }}</h3>
        <div class="goal--container">
          <div class="current--container" :style="`width: ${getPercentage()}%; max-width: 100%`">{{ getPercentage() }}%</div>
        </div>
        <p>
          <span>{{ donations.length }}</span> donateurs
        </p>
      </div>
    </Row>
  </section>
</template>

<script setup lang="ts">
import RangeSlider from "../components/RangeSlider.vue";
import { ref, watch } from "vue";
import { addDonation, donations, getTotal, getPercentage } from "../data/donations";
import Row from "../components/Row.vue";

const amount = ref(100);
watch(amount, () => (amount.value = amount.value < 1 ? 1 : amount.value));

const showLastStep = ref(false);
const name = ref("");
const nameError = ref("");
const mail = ref("");
const mailError = ref("");
const message = ref("");
const showFeedbackMessage = ref(false);

const showAllDonators = ref(false);

function donate() {
  if (!showLastStep.value) return (showLastStep.value = true);

  if (!validateForm()) return;

  showFeedbackMessage.value = true;
  addDonation(name.value, mail.value, amount.value, message.value);
  name.value = "";
  mail.value = "";
  message.value = "";
}

function validateForm(): boolean {
  return validateName() && validateMail();
}

function validateName() {
  nameError.value = "";

  if (name.value.length < 3) {
    nameError.value = "Naam moet minimaal 3 karakters lang zijn";
    return false;
  }

  return true;
}

function validateMail() {
  mailError.value = "";

  if (!mail.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    mailError.value = "Ongelidig emailadres";
    return false;
  }

  return true;
}
</script>

<style scoped lang="scss">
@use "../styles/pages/donate";
</style>
