<script setup>
import { computed, onMounted } from 'vue';
import { adsService } from '../services/AdsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { Ads } from '../models/Ads.js';

onMounted(() => {
  getAds()
})

const props = defineProps({
  adProp: { type: Ads, required: true }
})
async function getAds() {
  try {
    await adsService.getAds()
  } catch (error) {
    Pop.error(error)
  }
}
</script>
<template>
  <img :src="adProp.tall" alt="">
</template>


<style lang="scss" scoped></style>
