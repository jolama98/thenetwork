import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { api } from "./AxiosService.js"

class PostService {
  async getBlogById(postId) {

    AppState.activePost = null
    console.log('the post id is', postId);
    const response = await api.get(`api/posts/${postId}`)
    AppState.activePost = (response.data)
  }

  async getPosts() {
    const response = await api.get('api/posts')
    const posts = response.data.posts.map(postsPOJO => new Post(postsPOJO))
    AppState.posts = posts
  }


  async loadMore(pageNumber) {
    const response = await api.get(`api/posts?page=${pageNumber}`)
    const posts = response.data.posts.map(postsPOJO => new Post(postsPOJO))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }

}

export const postService = new PostService()
