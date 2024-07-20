<script setup>
import { computed, onMounted } from 'vue';
import { adsService } from '../services/AdsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

onMounted(() => {
  getAds()
})
const ads = computed(() => { AppState.ads })

async function getAds() {
  try {
    await adsService.getAds()
  } catch (error) {
    Pop.error(error)
  }
}
</script>


<template>
  <img src="https://codeworks.blob.core.windows.net/public/assets/ads/zookeeper.gif" alt="">
</template>


<style lang="scss" scoped></style>
