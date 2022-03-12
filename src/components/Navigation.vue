<template>
  <nav>
    <router-link :to="{ name: 'Home' }" class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.88 71.74-55.75C447.1 346.8 335.4 224 256 224zM108.8 211.4c-10.37-34.62-42.5-57.12-71.62-50.12S-7.104 202 3.27 236.6C13.64 271.3 45.77 293.8 74.89 286.8S119.1 246 108.8 211.4zM193.5 190.6c30.87-8.125 46.37-49.1 34.5-93.37s-46.5-71.1-77.49-63.87c-30.87 8.125-46.37 49.1-34.5 93.37C127.9 170.1 162.5 198.8 193.5 190.6zM474.9 161.3c-29.12-6.1-61.25 15.5-71.62 50.12c-10.37 34.63 4.75 68.37 33.87 75.37c29.12 6.1 61.12-15.5 71.62-50.12C519.1 202 503.1 168.3 474.9 161.3zM318.5 190.6c30.1 8.125 65.62-20.5 77.49-63.87c11.87-43.37-3.625-85.25-34.5-93.37c-30.1-8.125-65.62 20.5-77.49 63.87C272.1 140.6 287.6 182.5 318.5 190.6z"
        />
      </svg>
      <span>Artemis</span>
    </router-link>
    <div class="link--container">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Adopt' }">Adopteren</router-link>
      <router-link :to="{ name: 'Nieuws' }">Nieuws</router-link>
      <router-link :to="{ name: 'About' }">Over ons</router-link>
      <router-link :to="{ name: 'Donate' }">Doneren</router-link>
    </div>
    <div @click="toggleMenu" class="menu--icon__container">
      <span class="menu--icon"></span>
    </div>
  </nav>
  <div class="menu--container" :class="{ open: showMenu }" @click="toggleMenu">
    <div class="menu">
      <router-link :to="{ name: 'Home' }" class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.88 71.74-55.75C447.1 346.8 335.4 224 256 224zM108.8 211.4c-10.37-34.62-42.5-57.12-71.62-50.12S-7.104 202 3.27 236.6C13.64 271.3 45.77 293.8 74.89 286.8S119.1 246 108.8 211.4zM193.5 190.6c30.87-8.125 46.37-49.1 34.5-93.37s-46.5-71.1-77.49-63.87c-30.87 8.125-46.37 49.1-34.5 93.37C127.9 170.1 162.5 198.8 193.5 190.6zM474.9 161.3c-29.12-6.1-61.25 15.5-71.62 50.12c-10.37 34.63 4.75 68.37 33.87 75.37c29.12 6.1 61.12-15.5 71.62-50.12C519.1 202 503.1 168.3 474.9 161.3zM318.5 190.6c30.1 8.125 65.62-20.5 77.49-63.87c11.87-43.37-3.625-85.25-34.5-93.37c-30.1-8.125-65.62 20.5-77.49 63.87C272.1 140.6 287.6 182.5 318.5 190.6z"
          />
        </svg>
        <span>Artemis</span>
      </router-link>
      <div class="link--container">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Adopt' }">Adopteren</router-link>
        <router-link :to="{ name: 'Nieuws' }">Nieuws</router-link>
        <router-link :to="{ name: 'About' }">Over ons</router-link>
        <router-link :to="{ name: 'Donate' }">Doneren</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showMenu = ref(false);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $nav-height;
  font-size: 1.1rem;
  color: $title-color;

  .link--container a {
    padding: 1rem 1.5rem;
  }
}

.logo {
  display: flex;
  align-items: center;

  svg {
    height: 1.25em;
    margin-right: 0.5rem;
    fill: currentColor;
  }
}

.logo,
.router-link-active {
  font-weight: 600;
}

.menu--icon__container {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
}

.menu--icon {
  position: relative;
}

.menu--icon,
.menu--icon::before,
.menu--icon::after {
  background-color: $title-color;
  width: 2.5rem;
  height: 3px;
  border-radius: 0.25rem;
  transition: transform 600ms ease;
}

.menu--icon::before,
.menu--icon::after {
  content: "";
  position: absolute;
  width: 1.75rem;
}

.menu--icon::before {
  transform: translateY(-10px);
}

.menu--icon::after {
  transform: translateY(10px) translateX(0.75rem);
}

.menu--container {
  position: fixed;
  z-index: 10;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  transition: background-color 300ms ease;
}

.open {
  pointer-events: all;
  background-color: rgba(0, 0, 0, 0.4);

  .menu {
    transform: translateX(0);
  }
}

.menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 2rem;
  transform: translateX(-100%);
  transition: transform 300ms ease;
  width: 100%;
  max-width: 20rem;

  background-color: white;
  color: $title-color;

  .logo {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }

  .link--container {
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.2);

    a {
      display: block;
    }
  }
}
</style>
