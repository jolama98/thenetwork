<script setup>
import { computed, onMounted, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import { Profile } from '../models/Profile.js';
import { postService } from '../services/PostsService.js';
import { profilesService } from '../services/ProfileService.js';
import Pop from '../utils/Pop.js';
// import NavigateBtn from '../components/NavigateBtn.vue';

const profiles = computed(() => AppState.profilePosts)
const posts = computed(() => AppState.profilePosts)
const route = useRoute()

const activePost = computed(() => AppState.activePost)
watchEffect(() => {
  const profileId = route.params.profileId
  getProfileById(profileId)
  getPostsByProfileId(profileId)
})

async function getProfileById(profileId) {
  try {
    await profilesService.getProfileById(profileId)
  } catch (error) {
    Pop.error(error)
  }
}

async function getPostsByProfileId(profileId) {
  try {
    await postService.getPostsByProfileId(profileId)
  } catch (error) {
    Pop.error(error)
  }
}

</script>


<template>
  <NavigateBtn />
  <div class="d-flex justify-content-center pb-3">
    <div class="card" style="width: 48rem;">
      <div class="p-2">
        <img class="creator-picture" :src="AppState.profile.picture" alt="...">
        <img class="creator-picture" :src="AppState.profile.coverImg">
        <i :class="AppState.profile?.graduated ? 'mdi mdi-account-school fs-2' : ''"></i>
        <p>{{ AppState.profile.name }}</p>
        <a href="https://youtu.be/BBGEG21CGo0">{{ AppState.profile.linkedin }}</a>
      </div>
      <div class="card-body mb-3">
        <h5 class="card-title">{{ AppState.profile.bio }}</h5>
      </div>
    </div>
  </div>
  <div class="col-12 " v-for="post in posts" :key="post.id">
    <PostsCard :postProp="post" />
  </div>
</template>


<style lang="scss" scoped>
.post-img {
  min-height: 100%;
  width: 100%;
  object-fit: cover;
}

.creator-picture {
  height: 5vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}
</style>
