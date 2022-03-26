<template>
  <section class="hero">
    <Row align="center">
      <article>
        <h1 class="hero--title">Geen enkel dier is overbodig</h1>
        <p class="hero--subtitle">Ieder dier in nood is welkom in onze opvang. Wij vinden dat ieder dier geholpen moet worden, ongeacht waar het dier geboren is, een ziekte of handicap heeft.</p>
        <router-link :to="{ name: 'Donate' }">Verander nu een leven</router-link>
      </article>
      <article>
        <div>
          <img src="/assets/hero1.jpg" alt="" />
        </div>
        <div>
          <img src="/assets/hero2.jpg" alt="" />
        </div>
        <div>
          <img src="/assets/hero3.jpg" alt="" />
        </div>
      </article>
    </Row>
  </section>

  <section class="donate--section">
    <Row>
      <article class="donate--information">
        <h2 class="section__title--large">Samen maken wij het verschil</h2>
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
    </Row>
  </section>

  <section>
    <Slider />
  </section>

  <section class="news--section">
    <h2 class="section__title">Laatste nieuws</h2>
    <ArticleList :articles="articles.slice(0, 3)" />
  </section>

  <div class="newsletter--wrapper">
    <section>
      <Row>
        <article>
          <h2>Ontvang nieuws in je mailbox.</h2>
        </article>
        <article>
          <input placeholder="Email adres" type="text" v-model="emailInput" />
          <button type="submit" @click="sendMail">Abonneer</button>
        </article>
      </Row>
    </section>
  </div>

  <section class="about--section">
    <Row align="center">
      <article>
        <h2 class="section__title">Over ons</h2>
        <p>
          Artemis dierenopvang is een opvang waar in principe ieder dier in nood welkom is. Onze organisatie richt zich voornamelijk op huisdieren en wij zijn in regio Den Bosch de opvang met de
          meeste huisdieren. Wij werken vanuit de gedachte dat ieder dier die hulp nodig heeft geholpen moet worden ongeacht waar het dier geboren is, een ziekte of handicap heeft of dat de eigenaar
          wel of geen geld heeft voor de afstandskosten. Deze werkwijze is afwijkend van de meeste opvangen.
        </p>
        <p>
          Het doel van onze stichting is het opvangen van deze 'overbodige' dieren, deze verzorging en eventueel training te geven en vervolgens op zoek te gaan naar een liefdevolle nieuwe baas. Wij
          vangen zowel Nederlandse dieren op als dieren die in het buitenland geboren zijn. Deze laatste groep wordt veelal onbegrepen en dreigt vaak tussen wal en schip te belanden. Helaas worden
          dieren nog vaak van een foto uitgezocht en vervolgens naar Nederland gestuurd. Met deze plaatsingen gaat het regelmatig mis en er is dan geen opvang voor deze dieren. Om te voorkomen dat ze
          op verkoopsites belanden en vervolgens van hand tot hand gaan om nog meer trauma&#180;s op te lopen richten wij ons op de opvang voor deze dieren. Bij ons komen ze tot rust, worden ze
          eventueel getraind en gaan we vanuit daar op zoek naar een definitief thuis. Wij werken vanuit de gedachte dat op ieder potje een deksel past en er uiteindelijk een liefdevol thuis voor
          ieder dier komt. Indien het dier zich prima voelt in de opvang is deze welkom zolang nodig is. Wij hanteren dan ook een absoluut NO KILL beleid en euthanasie is alleen aan de orde bij
          ondragelijk lijden.
        </p>
        <p>Omdat ieder dier een tweede kans verdient!</p>
      </article>
      <article>
        <img src="/assets/about2.jpg" alt="Hond met baasje kijken naar dalgebied" />
      </article>
    </Row>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { articles } from "../data/articles";
import { donations, getTotal, getPercentage } from "../data/donations";
import Slider from "../components/Slider.vue";
import Row from "../components/Row.vue";
import ArticleList from "../components/ArticleList.vue";

let emailInput = ref("");

function sendMail() {
  emailInput.value = "";
  alert("Deze functionaliteit wordt nog toegevoegd");
}
</script>

<style lang="scss" scoped>
@use "../styles/pages/home";
</style>
