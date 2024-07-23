<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { postService } from '../services/PostsService.js';
import { AppState } from '../AppState.js';
import { profilesService } from '../services/ProfileService.js';
import { Profile } from '../models/Profile.js';



const posts = computed(() => AppState.posts)

const profiles = computed(() => AppState.profile)

onMounted(() => {
  discoverMovies()
  getPosts()
  console.log('posts', posts.value)
})

async function discoverMovies() {
  try {
    await profilesService.searchProfiles()
  } catch (error) {
    console.error(error)
    Pop.toast("could not discover movies ☹️", 'error')
  }
}

async function getPosts() {
  try {
    await postService.getPosts()
  } catch (error) {
    Pop.error(error)
  }
}


</script>
<template>
  <div class="row">
    <div class="col-10">
      <div class="d-flex justify-content-end">
        <Shearch />
      </div>
    </div>
  </div>
  <NavigatButton />
  <section class="container">
    <AddPost />
    <div class="row">
      <div class="col-12" v-for="post in posts" :key="post.id">
        <PostsCard :postProp="post" />
      </div>
    </div>
  </section>
  <NavigatButton />
</template>
<style scoped lang="scss"></style>
