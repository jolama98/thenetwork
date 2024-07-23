<script setup>
import { Ads } from '../models/Ads.js';


const props = defineProps({
  adsProp: { type: Ads, required: true }
})


</script>


<template>
  <div class="d-flex justify-content-center p-3">
    <img :src="adsProp.banner" alt="">
  </div>
</template>


<style lang="scss" scoped></style>
