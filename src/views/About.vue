<template>
  <Breadcrumbs>Over ons</Breadcrumbs>
  <section>
    <img src="/assets/about.jpg" alt="Over ons" />
    <div>
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
    </div>
  </section>
</template>

<script setup lang="ts">
import Breadcrumbs from "../components/Breadcrumbs.vue";
</script>

<style lang="scss" scoped>
@import "../styles/abstracts/variables";
@import "../styles/abstracts/mixins";

img {
  width: 100%;
  max-height: 30rem;
  object-fit: cover;
  display: block;
  border-radius: 0.5rem 0.5rem 0 0;
}

div {
  background-color: rgb(248, 248, 248);
  padding: 2.5rem;
  border-radius: 0 0 0.5rem 0.5rem;

  @include tablet {
    padding: 1rem;
  }
}

p {
  line-height: 1.6;
  color: $clr-neutral-800;
}

p + p {
  padding-top: 1rem;
}
</style>
