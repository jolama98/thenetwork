<script setup>
import { computed, ref } from 'vue';
import { AppState } from '../AppState.js';
import { postService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

const account = computed(() => AppState.account)
const editablePostData = ref({
  body: '',
  imgUrl: ''
})
async function createPost() {
  try {
    await postService.createPost(editablePostData.value)
    editablePostData.value = {
      body: '',
      imgUrl: ''

    }
  } catch (error) {
    Pop.error(error)
  }
}

</script>


<template>
  <div v-if="account?.picture" class="card mb-3 shadow-lg p-3 mb-1 rounded">
    <div>
      <img :src="account.picture" alt="account photo" height="40" class="m-2 creator-picture" />
      <form @submit.prevent="createPost()">
        <div class="form-floating mb-3">
          <textarea v-model="editablePostData.body" type="text" class="form-control" placeholder="Shear whats happing"
            required maxlength="500"></textarea>
        </div>
        <div>
          <input v-model="editablePostData.imgUrl" type="url" class="form-control" placeholder="ImgUrl" maxlength="500">
        </div>
        <div class="d-flex justify-content-end p-2">
          <button type="submit" class="btn btn-primary mdi mdi-image-multiple">Post</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.creator-picture {
  height: 5vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}
</style>
