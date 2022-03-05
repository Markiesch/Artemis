<template>
  <section class="hero">
    <article>
      <h1>Geen enkel dier is overbodig</h1>
      <p>Ieder dier in nood is welkom in onze opvang. Wij vinden dat ieder dier geholpen moet worden, ongeacht waar het dier geboren is, een ziekte of handicap heeft.</p>
      <router-link :to="{ name: 'Home' }">Verander nu een leven</router-link>
    </article>
    <article>
      <img src="assets/hero.png" alt="Hero" />
    </article>
  </section>

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

  <section>
    <Slider />
  </section>

  <section>
    <NewsCard :id="articles[0].id" />
    <NewsCard :id="articles[1].id" />
    <NewsCard :id="articles[2].id" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Slider from "../components/Slider.vue";
import NewsCard from "../components/NewsCard.vue";
import { articles } from "../data/articles";

// const articles = articles;

let donateCounter = ref(45);
</script>

<style lang="scss">
@import "../styles/variables.scss";

.hero--gradient {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.hero {
  min-height: calc(100vh - $nav-height);
  padding-bottom: $nav-height;
  display: flex;
  align-items: center;

  article {
    flex: 1 1 20rem;
  }

  article + article {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 60%;
  }

  a {
    color: $primary-color;
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
      color: $secondary-color;
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
      background-color: $primary-accent-color;
      border-radius: 0.25rem;
    }

    .current--container {
      background-color: $primary-color;
      width: 45%;
      padding: 0.25rem;
      border-radius: inherit;
      color: white;
      text-align: center;

      transition: width 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    p {
      color: $primary-color;
      font-size: 5rem;
      font-weight: 700;
    }
  }
}
</style>
