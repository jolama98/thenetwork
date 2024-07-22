<script setup>
import { Profile } from '../models/Profile.js';

const props = defineProps({

  profileProp: { type: Profile, required: true }
})

// const props = defineProps({
//   postProp: { type: Post, required: true }
// })

</script>

<!-- (picture, name, bio, social media links, cover image, alumni status (graduated), class) -->
<template>
  <h1>Profile Page</h1>
  <!-- <img :src="profileProp.coverImg" alt=""> -->
</template>


<style lang="scss" scoped></style>
