<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { postService } from '../services/PostsService.js';
import { AppState } from '../AppState.js';



onMounted(() => { getPosts() })
const posts = computed(() => AppState.posts)

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
    <div class="row">

      <!-- <AdCard /> -->

      <div class="col-9" v-for="post in posts" :key="post.id">
        <PostsCard :postProp="post" />
      </div>
    </div>
  </section>
  <NavigatButton />
</template>
<style scoped lang="scss"></style>
