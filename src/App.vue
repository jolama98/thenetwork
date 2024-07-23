<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Pop from './utils/Pop.js';
import { adsService } from './services/AdsService.js';

const ads = computed(() => AppState.ads)

onMounted(() => {
  getAdds()
})

async function getAdds() {
  try {
    await adsService.getAds()
  } catch (error) {
    Pop.error(error)
  }
}
</script>

<template>
  <header>
    <Navbar />
    <div v-for="ad in ads" :key="ad.title">
      <AdsCard :adsProp="ad" />
    </div>
  </header>
  <main>
    <router-view />

  </main>
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
