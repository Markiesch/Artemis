<template>
  <div class="hero--wrapper">
    <section class="hero">
      <article>
        <h1>Geen enkel dier is overbodig</h1>
        <p>Ieder dier in nood is welkom in onze opvang. Wij vinden dat ieder dier geholpen moet worden, ongeacht waar het dier geboren is, een ziekte of handicap heeft.</p>
        <router-link :to="{ name: 'Home' }">Verander nu een leven</router-link>
      </article>
    </section>
    <img src="../assets/hero.png" />
  </div>

  <section class="donate--section">
    <article class="donate--information">
      <h2>Wij willen het verschil maken</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolor earum quasi velit veritatis, molestias quam optio recusandae commodi consectetur veniam consequatur, eum autem ratione nihil
        aliquam sunt? Saepe, commodi?
      </p>
      <router-link :to="{ name: 'Home' }" @click="donateCounter += 5">Maak het verschil</router-link>
    </article>
    <article class="donate--stats">
      <p>&euro;349</p>
      <div class="goal--container">
        <div class="current--container" :style="`width:${donateCounter}%`">{{ donateCounter }}%</div>
      </div>
    </article>
  </section>

  <Slider></Slider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Slider from "../components/Slider.vue";
let donateCounter = ref(45);
</script>

<style lang="scss">
.hero {
  padding-top: var(--nav-height);
  padding-bottom: var(--nav-height);
  display: flex;
  align-items: center;
  min-height: 100vh;

  &--wrapper {
    background-color: var(--primary-accent-color);
    min-height: 100vh;
    position: relative;

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      max-height: 95%;
    }
  }

  & > * {
    max-width: 40rem;
  }

  a {
    color: var(--primary-color);
  }

  h1 {
    font-size: 5rem;
    line-height: 1.1;
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    margin: 2rem 0 1rem 0;
  }

  a {
    font-size: 1.75rem;
    font-weight: 600;
  }
}

.donate--section {
  display: flex;
  justify-content: center;
  padding-top: 6rem;
  padding-bottom: 6rem;

  article {
    flex: 1 1 20rem;
  }

  .donate--information {
    h2 {
      color: var(--secondary-color);
      font-size: 3.5rem;
      line-height: 1.1;
      font-weight: 800;
    }

    p {
      margin: 2rem 0 1.5rem 0;
    }
  }

  .donate--stats {
    text-align: right;

    .goal--container {
      width: 100%;
      background-color: var(--primary-accent-color);
      border-radius: 0.25rem;
    }

    .current--container {
      background-color: var(--primary-color);
      width: 45%;
      padding: 0.25rem;
      border-radius: inherit;
      color: white;
      text-align: center;

      transition: width 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    p {
      color: var(--primary-color);
      font-size: 5rem;
      font-weight: 700;
    }
  }
}
</style>
