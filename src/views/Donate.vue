<template>
  <section class="donate--section">
    <h1 class="large--section--title">Wij willen samen met u het verschil maken</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iure, sunt ullam illum id voluptatem quae! Inventore distinctio eius vel reprehenderit laborum! Vero nisi officiis, labore esse
      voluptas amet iure quibusdam tempora atque id veritatis eos! Reprehenderit illo facere voluptas.
    </p>
    <div class="svg--container">
      <svg :style="`height: clamp(25%, ${amount / 2}%, 100%)`" viewBox="0 0 162 175" fill="none">
        <path
          d="M72.5038 4.22503C75.1029 2.78161 78.0269 2.02417 81 2.02417C83.9731 2.02417 86.8971 2.78161 89.4962 4.22503L155.253 40.7475C156.616 41.5056 157.752 42.6144 158.542 43.959C159.333 45.3036 159.75 46.8351 159.75 48.395V120.451C159.749 123.572 158.914 126.636 157.331 129.325C155.748 132.014 153.474 134.231 150.746 135.746L89.4962 169.784C86.8971 171.227 83.9731 171.985 81 171.985C78.0269 171.985 75.1029 171.227 72.5038 169.784L11.2537 135.746C8.52686 134.232 6.25428 132.016 4.67125 129.329C3.08823 126.641 2.2523 123.579 2.25 120.46V48.395C2.24994 46.8351 2.66687 45.3036 3.45763 43.959C4.24839 42.6144 5.38422 41.5056 6.7475 40.7475L72.5125 4.22503H72.5038Z"
          stroke-width="4"
        />
        <path d="M81 87V174.5M2.25 43.25L81 87L2.25 43.25ZM81 87L159.75 43.25L81 87Z" stroke-width="4" />
        <path d="M28.5 89.87L54.75 104.5M41.625 65.125L120.375 21.375L41.625 65.125Z" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>

    <VueSlider class="range--slider" v-model="amount" tooltip-formatter="€{value}" tooltip="always" :min="1" :max="300" />
    <div class="button--container">
      <div :class="{ active: amount == 15 }" @click="amount = 15">€15</div>
      <div :class="{ active: amount == 30 }" @click="amount = 30">€30</div>
      <div :class="{ active: amount == 100 }" @click="amount = 100">€100</div>
      <div>
        <span>€</span>
        <input min="1" type="number" v-model="amount" />
      </div>
    </div>
    <div class="last-step" :class="{ show: showLastStep }">
      <h2 class="large--section--title">Nog één laatste stap</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium sit illo dolore tempore reprehenderit, sed vero commodi, quasi maxime nulla iure. A dolore harum ipsum omnis, autem
        aperiam tenetur?
      </p>
      <div class="input--container">
        <label for="name">Naam</label>
        <input :class="{ error: nameError }" v-model="name" @blur="validateName" @input="nameError = ''" type="text" id="name" />
        <p v-if="nameError">{{ nameError }}</p>
        <label for="emailadres">Emailadres</label>
        <input :class="{ error: mailError }" v-model="mail" @blur="validateMail" @input="mailError = ''" type="text" id="emailadres" />
        <p v-if="mailError">{{ mailError }}</p>
      </div>
    </div>
    <button @click="donate">Doneer €{{ amount }}</button>
  </section>
</template>

<script setup lang="ts">
import VueSlider from "vue-slider-component";
import { ref, watch } from "vue";

const amount = ref(50);
watch(amount, () => (amount.value = amount.value < 1 ? 1 : amount.value));

const showLastStep = ref(false);
const name = ref("");
const nameError = ref("");
const mail = ref("");
const mailError = ref("");

function donate() {
  if (!showLastStep.value) return (showLastStep.value = true);

  if (!validateForm()) return;
  alert("Bedankt voor uw donatie!");
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
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.donate--section {
  text-align: center;
  max-width: 70rem;

  h1,
  .last-step h2 {
    max-width: 20ch;
    line-height: 1.1;
    margin: 0 auto;
    color: $primary-color;
    padding-top: 4rem;
    padding-bottom: 2rem;
  }

  p {
    max-width: 80ch;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
}

.svg--container {
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: height 300ms linear;
    stroke: $primary-color;
  }
}

.range--slider {
  margin: 4rem 0;
}

.button--container {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
  cursor: pointer;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 10rem;

    margin: 0.5rem;
    padding: 1rem;

    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .active {
    border: 1px solid $primary-color;
    background: linear-gradient($primary-accent-color, transparent);
  }

  span {
    padding-right: 0.5rem;
  }

  input {
    border: none;
    padding: 1rem;
    background-color: rgb(240, 240, 240);
    border-radius: 0.5rem;
    font-size: 1.25rem;
  }
}

.last-step {
  max-height: 0;
  overflow: hidden;
  transition: all 1200ms ease;

  &.show {
    max-height: 200rem;
  }

  .input--container {
    text-align: left;
    max-width: 20rem;
    margin: 0 auto;

    p {
      font-size: 0.9rem;
      color: red;
      padding: 0.25rem 0 0 0;
    }
  }

  input,
  label {
    display: block;
    width: 100%;
  }

  label {
    margin: 1rem 0 0.25rem 0;
    font-weight: 600;
    cursor: pointer;
  }

  input {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .error {
    border-color: red;
  }
}

button {
  display: inline-block;
  padding: 1rem 1.5rem;
  margin-top: 2rem;
  cursor: pointer;

  color: white;
  background-color: $primary-color;
  border: none;
  border-radius: 5rem;

  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1;
}
</style>
