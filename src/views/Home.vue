<template>
  <section class="hero">
    <article>
      <h1 class="hero--title">Geen enkel dier is overbodig</h1>
      <p class="hero--subtitle">Ieder dier in nood is welkom in onze opvang. Wij vinden dat ieder dier geholpen moet worden, ongeacht waar het dier geboren is, een ziekte of handicap heeft.</p>
      <router-link :to="{ name: 'Home' }">Verander nu een leven</router-link>
    </article>
    <article>
      <div>
        <img src="/assets/hero1.jpg" alt="Hero" />
      </div>
      <div>
        <img src="/assets/hero2.jpg" alt="Hero" />
      </div>
      <div>
        <img src="/assets/hero3.jpg" alt="Hero" />
      </div>
    </article>
  </section>

  <section class="donate--section column--container">
    <article class="donate--information">
      <h2 class="large--section--title">Samen maken wij het verschil</h2>
      <p>
        Door een bijdrage, klein of groot, maakt u het ons mogelijk om dieren op te vangen in de regio Den Bosch. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium commodi sed
        alias ipsa dignissimos excepturi similique voluptate. Eum, ducimus. Help mee en wordt donateur!
      </p>
      <router-link :to="{ name: 'Donate' }">Doneren</router-link>
    </article>
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

  <section>
    <Slider />
  </section>

  <section class="news--section">
    <h2 class="section--title">Laatste nieuws</h2>
    <ArticleList :articles="articles.slice(0, 3)" />
  </section>

  <div class="newsletter--wrapper">
    <section class="column--container">
      <article>
        <h2>Ontvang nieuws in je mailbox.</h2>
      </article>
      <article>
        <input placeholder="Email adres" type="text" v-model="emailInput" />
        <button @click="sendMail">Abonneer</button>
      </article>
    </section>
  </div>

  <section class="about--section">
    <article>
      <h2 class="section--title">Over ons</h2>
      <p>
        Artemis dierenopvang is een opvang waar in principe ieder dier in nood welkom is. Onze organisatie richt zich voornamelijk op huisdieren en wij zijn in regio Den Bosch de opvang met de meeste
        huisdieren. Wij werken vanuit de gedachte dat ieder dier die hulp nodig heeft geholpen moet worden ongeacht waar het dier geboren is, een ziekte of handicap heeft of dat de eigenaar wel of
        geen geld heeft voor de afstandskosten. Deze werkwijze is afwijkend van de meeste opvangen.
      </p>
      <p>
        Het doel van onze stichting is het opvangen van deze 'overbodige' dieren, deze verzorging en eventueel training te geven en vervolgens op zoek te gaan naar een liefdevolle nieuwe baas. Wij
        vangen zowel Nederlandse dieren op als dieren die in het buitenland geboren zijn. Deze laatste groep wordt veelal onbegrepen en dreigt vaak tussen wal en schip te belanden. Helaas worden
        dieren nog vaak van een foto uitgezocht en vervolgens naar Nederland gestuurd. Met deze plaatsingen gaat het regelmatig mis en er is dan geen opvang voor deze dieren. Om te voorkomen dat ze op
        verkoopsites belanden en vervolgens van hand tot hand gaan om nog meer trauma&#180;s op te lopen richten wij ons op de opvang voor deze dieren. Bij ons komen ze tot rust, worden ze eventueel
        getraind en gaan we vanuit daar op zoek naar een definitief thuis. Wij werken vanuit de gedachte dat op ieder potje een deksel past en er uiteindelijk een liefdevol thuis voor ieder dier komt.
        Indien het dier zich prima voelt in de opvang is deze welkom zolang nodig is. Wij hanteren dan ook een absoluut NO KILL beleid en euthanasie is alleen aan de orde bij ondragelijk lijden.
      </p>
      <p>Omdat ieder dier een tweede kans verdient!</p>
    </article>
    <article>
      <img src="/assets/about2.jpg" alt="Hond met baasje kijken naar dalgebied" />
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { articles } from "../data/articles";
import { donations, getTotal, getPercentage } from "../data/donations";
import Slider from "../components/Slider.vue";
import ArticleList from "../components/ArticleList.vue";

let emailInput = ref("");

function sendMail() {
  emailInput.value = "";
  alert("Deze functionaliteit wordt nog toegevoegd");
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.hero {
  min-height: calc(100vh - $nav-height);
  align-items: center;
  display: flex;
  padding-bottom: calc($nav-height / 2);

  article {
    flex: 1 1 30rem;
  }

  article + article {
    display: flex;
    margin: -0.5rem;
    filter: drop-shadow(0 0 5rem rgba(20, 71, 57, 0.3));

    div {
      flex: 1 1 20rem;
      overflow: hidden;
      margin: 0.5rem;
      border-radius: 0.5rem;
    }

    div:nth-child(2) {
      transform: translateY(2.5rem);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    color: $title-color;
    max-width: 13ch;
  }

  p {
    padding: 2rem 0;
    max-width: 45ch;
    color: $text-color;
  }

  a {
    display: inline-block;
    background-color: $primary-color;
    font-size: 1.1rem;
    border-radius: 0.25rem;
    padding: 1rem;
    line-height: 1;
    color: white;
    font-weight: 600;
  }

  @include tablet {
    flex-direction: column;
    text-align: center;

    article {
      flex: unset;
    }

    article:first-of-type {
      padding: 5rem 0;
    }

    h1,
    p {
      max-width: unset;
    }
  }
}

.donate--section {
  justify-content: center;
  padding-top: 15rem;
  padding-bottom: 15rem;

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

  p {
    margin: 2rem 0 1.5rem 0;
    color: $text-color;
  }

  a {
    padding: 1rem;
    font-weight: 500;
    line-height: 1;
    background-color: $secondary-color;
    color: white;
    display: inline-block;
    border-radius: 0.25rem;
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

.news--section {
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;

  h2 {
    color: $primary-color;
    padding-bottom: 1rem;
  }

  & > div {
    margin: -1rem;
  }

  article {
    margin: 1rem;
  }
}

.newsletter--wrapper {
  background-color: $primary-accent-color;
  padding: 6rem 0;

  h2 {
    font-size: 3rem;
    color: $primary-color;
    line-height: 1.1;
  }

  input,
  button {
    display: block;
    width: 100%;
    max-width: 30rem;
    border-radius: 0.25rem;
    border: none;
    text-align: left;
    padding: 1em;
    font-size: 1rem;
  }

  input:focus {
    outline: none;
  }

  button {
    background-color: $primary-color;
    margin-top: 0.5rem;
    color: white;
    font-weight: 500;
  }
}

.about--section {
  padding-top: 5rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  p {
    padding-top: 1rem;
    line-height: 1.6;
    color: $text-color;
  }

  h2 {
    color: $primary-color;
  }

  article + article {
    padding-left: 10rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 0.25rem;
  }
}
</style>
