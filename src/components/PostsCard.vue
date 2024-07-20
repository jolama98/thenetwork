<script setup>
import { Post } from '../models/Post.js';

defineProps({
  postProp: { type: Post, required: true }
}
)

</script>

<template>
  <div class="pb-5">
    <div class="card mb-3 shadow-lg p-3 mb-1  rounded">
      <div class="card-body">
        <router-link :to="{ 'name': 'Posts', params: { postsId: postProp.id } }"
          :title="`Go to ${postProp.creator.name}'s profile page`">
          <img :src="postProp.creator.picture" class="creator-picture m-2  " alt="...">
          <p>{{ postProp.creator.name }}</p>


        </router-link>
        <div class="d-flex justify-content-starts">

          <p>{{ postProp.createdAt.toLocaleTimeString([], { hour: '2-digit', hour12: false })
          }}hr <i :class="postProp.creator?.graduated ? 'mdi mdi-account-school fs-2' : ''"></i>
          </p>

        </div>
      </div>

      <div class="p-2">
        <p class="card-text fs-3">{{ postProp.body }}</p>
      </div>
      <img :src="postProp.imgUrl" class="post-img" :alt="postProp.likes">
      <div class="d-flex justify-content-end m-4 ">
        <p class="fs-4"><i class=" display-5 mdi mdi-heart-outline"></i>{{ postProp.likes.length }}</p>
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
