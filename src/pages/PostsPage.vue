<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';

const route = useRoute()
const posts = computed(() => AppState.posts)
const activePost = computed(() => AppState.activePost)

onMounted(() => {
  const postsId = route.params.postsId
})

</script>


<template>
  <div class="d-flex justify-content-center">

    <div class="card" style="width: 48rem;">
      <div>
        <img class="creator-picture" :src="activePost.creator.coverImg">
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
