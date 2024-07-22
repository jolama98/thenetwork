<script setup>
import { onMounted } from 'vue';
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
// TODO use an onMounted to get ads here
onMounted(() => {
  setActiveAds()
})

function setActiveAds() {

}
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />

  </main>
  <!-- TODO after gettings ads, v-for over them and display them -->
  <footer class="bg-dark text-light">

  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
