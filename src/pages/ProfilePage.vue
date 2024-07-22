<script setup>
import { computed, onMounted, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import { Profile } from '../models/Profile.js';
import { postService } from '../services/PostsService.js';
import { profilesService } from '../services/ProfileService.js';
import Pop from '../utils/Pop.js';


// FIXME use the profile variable to display the profile info
const profiles = computed(() => AppState.profilePosts)
const posts = computed(() => AppState.profilePosts)
const route = useRoute()

// FIXME get rid of this when you are no longer accessing this in your template
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
  <!-- TODO create navigateButton component here just for the profile posts, pass down page number AND profileId to your service for the network request -->
  <div class="d-flex justify-content-center pb-3">
    <div class="card" style="width: 48rem;">
      <div>
        <img class="creator-picture" :src="AppState.profile.coverImg">
        <p>{{ AppState.profile.name }}</p>
        <p>{{ AppState.profile.linkedin }}</p>
        <img class="creator-picture" :src="AppState.profile.picture" alt="...">
      </div>
      <div class="card-body">
        <img class="post-img" :src="activePost.imgUrl">
        <h5 class="card-title">{{ AppState.profile.bio }}</h5>

      </div>
      <div class="col-12" v-for="post in posts" :key="post.id">
        <PostsCard :postProp="post" />
      </div>
    </div>
  </div>
  <div class="col-12" v-for="post in posts" :key="post.id">
    <PostsCard :postProp="post" />
  </div>
</template>


<style lang="scss" scoped></style>
