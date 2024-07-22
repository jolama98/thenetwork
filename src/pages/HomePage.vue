<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { postService } from '../services/PostsService.js';
import { AppState } from '../AppState.js';

const posts = computed(() => AppState.posts)
const ads = computed(() => AppState.ads)

onMounted(() => { getPosts() })

async function getPosts() {
  try {
    await postService.getPosts()
  } catch (error) {
    Pop.error(error)
  }
}

</script>


<template>
  <NavigatButton />
  <section class="container">
    <AddPost />
    <div v-for="ad in ads" :key="ad.title">
      <AdCard />
    </div>
    <div class="row">
      <div class="col-12" v-for="post in posts" :key="post.id">
        <PostsCard :postProp="post" />
      </div>
    </div>
  </section>
  <NavigatButton />
</template>
<style scoped lang="scss"></style>
