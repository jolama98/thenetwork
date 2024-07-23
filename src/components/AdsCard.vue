<script setup>
import { Ads } from '../models/Ads.js';


const props = defineProps({
  adsProp: { type: Ads, required: true }
})


</script>


<template>
  <div>
    <p>{{ adsProp.banner }}</p>
  </div>
</template>


<style lang="scss" scoped></style>
