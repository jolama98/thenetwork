import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { api } from "./AxiosService.js"

class PostService {

  setActivePost(posts) {
    AppState.activePost = posts
  }
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
    AppState.totalPages = response.data.page
  }

  async destroyPost(postId) {
    const response = await api.delete(`api/posts/${postId}`)
    const postIndex = AppState.posts.findIndex(Post => Post.id == postId)
    if (postIndex == -1) throw new Error("You messed up on findIndex")
    AppState.posts.splice(postIndex, 1)
  }


  async changePage(pageNumber) {
    const response = await api.get(`api/post?page=${pageNumber}`)
    const posts = response.data.posts.map(PostData => new Post(PostData))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }
  async changePageV2(pageNumber) {
    const response = await api.get(`api/post?page=${pageNumber}`)
    const posts = response.data.posts.map(PostData => new Post(PostData))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }

}

export const postService = new PostService()
