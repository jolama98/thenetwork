import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Profile } from "../models/Profile.js"
import { Post } from "../models/Post.js"

class ProfilesService {
  async getProfileById(profileId) {
    AppState.profile = null

    // / api / posts ? page = number
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log('GOT PROFILE', response.data)
    const profile = new Profile(response.data)
    AppState.profile = profile
  }

  async loadMorePostsById(posts) {
    const response = await api.get(`api/posts?query=${posts}`)
    const post = response.data.posts.map(postsPOJO => new Post(postsPOJO))
    AppState.posts = post
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
    // api / posts ? query = query
  }
}
export const profilesService = new ProfilesService()
