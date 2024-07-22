<script setup>
import { computed, onMounted, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import { postService } from '../services/PostsService.js';
import { profilesService } from '../services/ProfileService.js';
import Pop from '../utils/Pop.js';

const profile = computed(() => AppState.profile)
const posts = computed(() => AppState.profilePosts)
const route = useRoute()

// const projects = computed(() => AppState.profileProjects)
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
  <div class="d-flex justify-content-center">

    <div class="card" style="width: 48rem;">
      <div>
        <img class="creator-picture" :src="activePost.imgUrl">
        <p>{{ activePost.creator.name }}</p>
        <p>{{ activePost.creator.github }}</p>
        <img class="creator-picture" :src="activePost.creator.picture" alt="...">
      </div>
      <div class="card-body">
        <img class="post-img" :src="activePost.imgUrl">
        <h5 class="card-title">{{ activePost.creator.bio }}</h5>

      </div>
      <div class="col-12" v-for="post in posts" :key="post.id">
        <PostsCard :postProp="post" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
