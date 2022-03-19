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

    <VueSlider class="range--slider" v-model="amount" tooltip-formatter="&euro;{value}" tooltip="always" :min="1" :max="300" />
    <div class="button--container">
      <div :class="{ active: amount == 15 }" @click="amount = 15">&euro;15</div>
      <div :class="{ active: amount == 30 }" @click="amount = 30">&euro;30</div>
      <div :class="{ active: amount == 100 }" @click="amount = 100">&euro;100</div>
      <div>
        <span>&euro;</span>
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

        <label for="message">Bericht (optioneel)</label>
        <textarea v-model="message" id="message"></textarea>
      </div>
    </div>
    <button @click="donate">Doneer &euro;{{ amount }}</button>
  </section>

  <section class="stats--section column--container">
    <!-- Latest donators -->
    <article class="donate--information">
      <h2 class="large--section--title">Donateurs die u voor waren</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, adipisci excepturi a porro hic ipsam incidunt soluta consequuntur iusto perspiciatis, quis saepe nihil. Ipsum officiis
        excepturi sint quisquam, libero numquam.
      </p>
      <div class="donation--container" v-for="donation in donations.slice(0, 5)">
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
    </article>

    <!-- Donation stats -->
    <article class="donate--stats">
      <h3>&euro;{{ getTotal() }}</h3>
      <div class="goal--container">
        <div class="current--container" :style="`width: ${getPercentage()}%; max-width: 100%`">{{ getPercentage() }}%</div>
      </div>
      <p>
        <span>{{ donations.length }}</span> donateurs
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import VueSlider from "vue-slider-component";
import { ref, watch } from "vue";
import { addDonation, donations, getTotal, getPercentage } from "../data/donations";

const amount = ref(50);
watch(amount, () => (amount.value = amount.value < 1 ? 1 : amount.value));

const showLastStep = ref(false);
const name = ref("");
const nameError = ref("");
const mail = ref("");
const mailError = ref("");
const message = ref("");

function donate() {
  if (!showLastStep.value) return (showLastStep.value = true);

  if (!validateForm()) return;

  addDonation(name.value, mail.value, amount.value, message.value);
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

  .svg--container {
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

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

  input,
  textarea {
    padding: 0.5rem;
    width: 100%;
    border-radius: 0.25rem;
    resize: vertical;
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

.stats--section {
  justify-content: center;
  padding-top: 15rem;

  @include tablet {
    text-align: center;
  }
}

.donate--information {
  h2 {
    color: $primary-color;
    line-height: 1.1;
    font-weight: 800;
  }

  & > p {
    color: $text-color;
    padding: 1.5rem 0;
  }

  .donation--container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.75rem;
    margin-top: 1rem;
    border-radius: 0.25rem;
    max-width: 30rem;

    .svg--container {
      padding-right: 1rem;
    }

    svg {
      height: 2rem;
      fill: $title-color;
    }
  }

  .donator {
    font-size: 1.25rem;
    font-weight: 600;
    color: $title-color;
    line-height: 1;
    padding-bottom: 0.5rem;

    span {
      color: $secondary-color;
    }
  }

  .message {
    color: $text-color;
  }

  .amount {
    color: $secondary-color;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1;
  }
}

.donate--stats {
  text-align: right;

  @include tablet {
    padding-left: 0;
  }

  .goal--container {
    width: 100%;
    background-color: $secondary-accent-color;
    border-radius: 0.25rem;
  }

  .current--container {
    background-color: $secondary-color;
    padding: 0.25rem;
    border-radius: inherit;
    color: white;
    text-align: center;
    font-weight: 500;
    font-size: 1.25rem;
  }

  h3 {
    color: $secondary-color;
    font-size: 6rem;
    font-weight: 700;
  }

  p {
    margin-top: 1rem;
    color: $text-color;
    font-size: 1.25rem;

    span {
      color: $secondary-color;
    }
  }
}
</style>
