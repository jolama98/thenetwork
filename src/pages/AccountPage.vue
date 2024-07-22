<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

const account = computed(() => AppState.account)

</script>
<!-- TODO copy and paste my code from art terminal for the account form -->
<!-- TODO add more inputs to the form so we can edit all properties of account -->
<template>
  <div class="about text-center">
    <div v-if="account">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
