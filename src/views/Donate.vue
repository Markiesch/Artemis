<template>
  <section class="donate--section">
    <h2 class="large--section--title">Wij willen samen met u het verschil maken</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore, atque earum doloremque saepe voluptas.</p>
    <div class="svg--container">
      <svg :style="`height: ${amount > 100 ? 100 : amount}%`" viewBox="0 0 162 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M72.5038 4.22503C75.1029 2.78161 78.0269 2.02417 81 2.02417C83.9731 2.02417 86.8971 2.78161 89.4962 4.22503L155.253 40.7475C156.616 41.5056 157.752 42.6144 158.542 43.959C159.333 45.3036 159.75 46.8351 159.75 48.395V120.451C159.749 123.572 158.914 126.636 157.331 129.325C155.748 132.014 153.474 134.231 150.746 135.746L89.4962 169.784C86.8971 171.227 83.9731 171.985 81 171.985C78.0269 171.985 75.1029 171.227 72.5038 169.784L11.2537 135.746C8.52686 134.232 6.25428 132.016 4.67125 129.329C3.08823 126.641 2.2523 123.579 2.25 120.46V48.395C2.24994 46.8351 2.66687 45.3036 3.45763 43.959C4.24839 42.6144 5.38422 41.5056 6.7475 40.7475L72.5125 4.22503H72.5038Z"
          stroke="#144739"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M81 87V174.5M2.25 43.25L81 87L2.25 43.25ZM81 87L159.75 43.25L81 87Z" stroke="#144739" stroke-width="4" stroke-linejoin="round" />
        <path d="M28.5 89.87L54.75 104.5M41.625 65.125L120.375 21.375L41.625 65.125Z" stroke="#144739" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>

    <RangeSlider v-model="amount"></RangeSlider>
    <!-- <input class="range--slider" type="range" v-model="amount" min="5" max="200" /> -->
    <div class="button--container">
      <div :class="{ active: amount == 15 }" @click="amount = 15">€15</div>
      <div :class="{ active: amount == 30 }" @click="amount = 30">€30</div>
      <div :class="{ active: amount == 100 }" @click="amount = 100">€100</div>
      <div>
        <span>€</span>
        <input type="number" v-model="amount" />
      </div>
    </div>
    <!-- <div>
      <div class="card--container">
        <div v-for="(option, index) in options" :class="{ active: activeIndex === index }" @click="activeIndex = index">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.9999 29.4L9.7999 18.2M20.9999 42V19.6V42ZM20.9999 21V29.4V21ZM20.9999 21C20.9999 18.0296 19.8199 15.1808 17.7195 13.0804C15.6191 10.98 12.7703 9.80002 9.7999 9.80002H1.3999V18.2C1.3999 21.1704 2.5799 24.0192 4.68031 26.1196C6.78071 28.22 9.62948 29.4 12.5999 29.4H20.9999V21ZM20.9999 21H29.3999C32.3703 21 35.2191 19.82 37.3195 17.7196C39.4199 15.6192 40.5999 12.7704 40.5999 9.80002V1.40002H32.1999C29.2295 1.40002 26.3807 2.58002 24.2803 4.68043C22.1799 6.78084 20.9999 9.6296 20.9999 12.6V21ZM20.9999 21L32.1999 9.80002L20.9999 21Z"
              stroke="#144739"
              stroke-width="2"
            />
          </svg>
          <div>
            <h3>Help 1 dierenleven</h3>
            <p>€{{ option }}</p>
          </div>
        </div>
      </div>
      <button @click="donate">Doneer nu</button>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import RangeSlider from "@vueform/slider";
import { ref } from "vue";

const amount = ref(10);
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.donate--section {
  text-align: center;

  h2 {
    max-width: 20ch;
    line-height: 1.1;
    margin: 0 auto;
    color: $primary-color;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }

  p {
    padding-bottom: 1rem;
  }

  .svg--container {
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button--container {
    display: flex;
    flex-wrap: wrap;
    margin: -0.5rem;
    cursor: pointer;

    & > div {
      flex: 1 1 15rem;
      margin: 0.5rem;
      border-radius: 0.25rem;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
      font-size: 1.5rem;
      font-weight: 600;
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
      padding: 1.5rem;
      background-color: rgb(240, 240, 240);
      border-radius: 0.5rem;
      font-size: 1.25rem;
    }
  }

  // .card--container {
  //   display: flex;
  //   margin: -0.5rem;
  //   flex-wrap: wrap;

  //   svg {
  //     height: 2rem;
  //     padding-right: 1rem;
  //   }

  //   & > div {
  //     flex: 1 1 20rem;
  //     cursor: pointer;
  //     margin: 0.5rem;
  //     padding: 1.5rem;

  //     display: grid;
  //     grid-template-columns: auto 1fr;

  //     border: 1px solid rgba(0, 0, 0, 0.2);
  //     border-radius: 0.25rem;
  //   }

  //   .active {
  //     border-color: $primary-color;
  //     background: linear-gradient($primary-accent-color, transparent);
  //   }
  // }

  button {
    display: inline-block;
    padding: 1rem 1.5rem;
    margin-top: 2rem;
    cursor: pointer;

    color: white;
    background-color: $secondary-color;
    border: none;
    border-radius: 5rem;

    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1;
  }
}
</style>
