<script setup>
import { computed, onMounted } from 'vue';
import { Post } from '../models/Post.js';
import { postService } from '../services/PostsService.js';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
const account = computed(() => AppState.account)

const props = defineProps({
  postProp: { type: Post, required: true }
})

onMounted(() => {
  setActivePost()
})

async function likePosts(postId) {
  try {
    await postService.likePosts(postId)
  } catch (error) {
    Pop.error(error)
  }
}
function setActivePost() {
  postService.setActivePost(props.postProp)
}

async function destroyCar(postId) {
  try {
    const wantsToDelete = await Pop.confirm('Are you sure you want to delete your post?')
    if (!wantsToDelete) return
    await postService.destroyPost(postId)

  } catch (error) {
    Pop.error(error)
  }
}
</script>

<template>
  <div class="pb-5">
    <div class="card mb-3 shadow-lg p-3 mb-1 rounded">
      <div class="card-body">
        <router-link :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }"
          :title="`Go to ${postProp.creator?.name}'s profile page`">
          <img :src="postProp.creator.picture" class="creator-picture m-2  " alt="...">
          <p>{{ postProp.creator.name }}</p>
        </router-link>
        <div class="d-flex justify-content-starts">
          <p>{{ postProp.createdAt.toLocaleString()
          }}hr <i :class="postProp.creator?.graduated ? 'mdi mdi-account-school fs-2' : ''"></i>
          </p>
        </div>
      </div>

      <div class="p-2">
        <p class="card-text fs-3">{{ postProp.body }}</p>
      </div>
      <img v-if="postProp.imgUrl != ''" :src="postProp.imgUrl" class="post-img" :alt="postProp.likes">
      <div class="d-flex justify-content-end m-4 ">

        <p class="fs-4"><i @click="likePosts(postProp.id)" class="display-5 mdi mdi-heart-outline"></i>{{
          postProp.likes.length
        }}</p>
        <div>
          <button v-if="account?.id == postProp.creatorId" @click="destroyCar(postProp.id)" class="btn btn-outline-danger"
            title="Delete Car" type="button">
            <i class="mdi mdi-close-octagon fs-3"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.post-img {
  height: 30vh;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.creator-picture {
  height: 5vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}
</style>
