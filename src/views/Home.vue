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
      <h2>Wij willen samen het verschil maken</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolor earum quasi velit veritatis, molestias quam optio recusandae commodi consectetur veniam consequatur, eum autem ratione nihil
        aliquam sunt? Saepe, commodi?
      </p>
      <router-link :to="{ name: 'Home' }" @click="donateCounter += 5">Maak het verschil</router-link>
    </article>
    <article class="donate--stats">
      <h3>&euro;349</h3>
      <div class="goal--container">
        <div class="current--container" :style="`width:${donateCounter}%`">{{ donateCounter }}%</div>
      </div>
      <p><span>62</span> donateurs</p>
    </article>
  </section>

  <section>
    <Slider />
  </section>

  <section class="news--section">
    <h2 class="section--title">Laatste nieuws</h2>
    <div class="column--container">
      <ArticleCard :id="articles[0].id" />
      <ArticleCard :id="articles[1].id" />
      <ArticleCard :id="articles[2].id" />
    </div>
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

  <section class="about--section column--container">
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
        verkoopsites belanden en vervolgens van hand tot hand gaan om nog meer trauma´s op te lopen richten wij ons op de opvang voor deze dieren. Bij ons komen ze tot rust, worden ze eventueel
        getraind en gaan we vanuit daar op zoek naar een definitief thuis. Wij werken vanuit de gedachte dat op ieder potje een deksel past en er uiteindelijk een liefdevol thuis voor ieder dier komt.
        Indien het dier zich prima voelt in de opvang is deze welkom zolang nodig is. Wij hanteren dan ook een absoluut NO KILL beleid en euthanasie is alleen aan de orde bij ondragelijk lijden.
      </p>
      <p>Omdat ieder dier een tweede kans verdient!</p>
    </article>
    <article>
      <!-- <img src="" alt="" /> -->
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { articles } from "../data/articles";
import Slider from "../components/Slider.vue";
import ArticleCard from "../components/ArticleCard.vue";

let donateCounter = ref(45);
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
    justify-content: space-between;
    margin: -0.5rem;
    filter: drop-shadow(0 0 25vw rgba(20, 71, 57, 0.5));

    div {
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
    background-color: $secondary-color;
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

    article:first-of-type {
      padding: 5rem 0;
    }

    article {
      flex: unset;
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
    color: $text-color;
  }

  a {
    padding: 1rem;
    line-height: 1;
    background-color: $primary-color;
    color: white;
    display: inline-block;
    border-radius: 0.25rem;
  }
}

.donate--stats {
  text-align: right;
  padding-left: 2rem;

  @include tablet {
    padding-left: 0;
  }

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

  h3 {
    color: $primary-color;
    font-size: 5rem;
    font-weight: 700;
  }

  p {
    margin-top: 1rem;
    color: $text-color;

    span {
      color: $primary-color;
    }
  }
}

.news--section {
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;

  h2 {
    color: $secondary-color;
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
  background-color: $secondary-accent-color;
  padding: 6rem 0;

  h2 {
    font-size: 3rem;
    color: $secondary-color;
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
    background-color: $secondary-color;
    margin-top: 0.5rem;
    color: white;
    font-weight: 500;
  }
}

.about--section {
  padding-top: 5rem;

  p {
    padding-top: 1rem;
    line-height: 1.6;
    color: $text-color;
  }

  h2 {
    color: $secondary-color;
  }
}
</style>
