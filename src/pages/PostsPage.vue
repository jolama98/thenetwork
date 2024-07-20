<script setup>
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { postService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

const route = useRoute()
watchEffect(() => {
  const postsId = route.params.postsId
  getPostById(postsId)
})

async function getPostById(postsId) {

  try {
    await postService.getBlogById(postsId)
  } catch (error) {
    Pop.error(error)
  }
}

const activePost = computed(() => AppState.activePost)
</script>


<template>
  <div class="d-flex justify-content-center">

    <div class="card" style="width: 48rem;">
      <div>
        <img class="creator-picture" :src="activePost.creator.picture" alt="...">
      </div>
      <div class="card-body">
        <img class="post-img" :src="activePost.imgUrl">
        <h5 class="card-title">{{ activePost.body }}</h5>

      </div>
    </div>
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
