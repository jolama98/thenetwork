<script setup>
import { computed, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfileService.js';
import { AppState } from '../AppState.js';


const searchTerm = ref('')
const searchingFor = computed(() => AppState.searchingFor)

async function searchProfiles() {
  try {
    await profilesService.searchProfiles(searchTerm.value)
    searchTerm.value = ''
  } catch (error) {
    console.error(error);
    Pop.toast("could not complete search", 'error')
  }
}

async function clearSearch() {
  try {
    await profilesService.clearSearch()
  } catch (error) {
    console.error(error);
    Pop.toast("could not clear search results", 'error')
  }
}


</script>


<template>
  <form @submit.prevent="searchProfiles()">
    <div class="input-group rounded-pill">
      <input v-model="searchTerm" type="text" class="form-control" />
      <button class="btn btn-info px-3"><i class="mdi mdi-magnify"></i></button>
    </div>
  </form>
  <section class="text-start">
    <div v-if="searchingFor" class="bg-light p-2 px-3 rounded-pill d-inline fs-5 fw-normal text-dark">searching for: {{
      searchingFor }} <button @click="clearSearch()" class="btn"><i class="mdi mdi-close"></i></button></div>
  </section>
</template>


<style lang="scss" scoped></style>
