import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"

class PostService {

  setActivePost(posts) {
    AppState.activePost = posts
  }

  // const response = await api.get('api/projects')
  //   logger.log('GOT PROJECTS 🖼️🎨🎭', response.data)
  // const projects = response.data.map(projectPOJO => new Project(projectPOJO))
  //   AppState.projects = projects

  async getPosts() {
    const response = await api.get('api/posts')
    const posts = response.data.posts.map(postsPOJO => new Post(postsPOJO))
    AppState.posts = posts
  }

  async getPostsByProfileId(profileId) {
    AppState.profilePosts = []

    const response = await api.get(`api/posts?creatorId=${profileId}`)
    const posts = response.data.posts.map(postsPOJO => new Post(postsPOJO))
    AppState.profilePosts = posts
  }

  async createPost(editablePostData) {
    const response = await api.post('api/posts', editablePostData)
    const newPost = new Post(response.data)
    AppState.posts.unshift(newPost)
  }

  async likePosts(postId) {
    const reactive = await api.post(`api/posts/${postId}/like`)
  }


  async loadMore(pageNumber) {
    const response = await api.get(`api/posts?page=${pageNumber}`)
    const posts = response.data.posts.map(postsPOJO => new Post(postsPOJO))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }

  async destroyPost(postId) {
    const response = await api.delete(`api/posts/${postId}`)
    const postIndex = AppState.posts.findIndex(Post => Post.id == postId)
    if (postIndex == -1) throw new Error("You messed up on findIndex, big fella")
    AppState.posts.splice(postIndex, 1)
  }
}

export const postService = new PostService()
