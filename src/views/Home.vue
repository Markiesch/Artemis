<template>
  <div class="background"></div>
  <section class="hero column--container">
    <article>
      <h1>Geen enkel dier is overbodig</h1>
      <p>Ieder dier in nood is welkom in onze opvang. Wij vinden dat ieder dier geholpen moet worden, ongeacht waar het dier geboren is, een ziekte of handicap heeft.</p>
      <router-link :to="{ name: 'Home' }">Verander nu een leven</router-link>
    </article>
    <article>
      <img src="/assets/hero.png" alt="Hero" />
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
    <!-- Wrapper om negative margins te gebruiken  -->
    <div class="news--wrapper column--container">
      <NewsCard :id="articles[0].id" />
      <NewsCard :id="articles[1].id" />
      <NewsCard :id="articles[2].id" />
    </div>
  </section>

  <div class="donate--wrapper">
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
      <h2>Over ons</h2>
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
import NewsCard from "../components/NewsCard.vue";

let donateCounter = ref(45);
let emailInput = ref("");

function sendMail() {
  emailInput.value = "";
  alert("Deze functionaliteit wordt nog toegevoegd");
}
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
  align-items: center;

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
  justify-content: center;
  padding-top: 6rem;
  padding-bottom: 6rem;

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

.news--wrapper {
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  margin: -1rem;

  article {
    margin: 1rem;
  }
}

.donate--wrapper {
  background-color: $secondary-accent-color;
  padding: 5rem 0;

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
  padding: 5rem 2rem;

  p {
    padding-top: 1rem;
    line-height: 1.6;
  }
}

.background {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient($primary-accent-color, transparent);
}
</style>
