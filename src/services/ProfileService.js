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

  // async changePage(pageNumber) {
  //   const response = await api.get(`api/posts/?page=${pageNumber}`)
  //   console.log('📃🎞️📡', response.data);
  //   const profile = response.data.posts.map(profileData => new Profile(profileData))
  //   AppState.profile = profile
  //   AppState.currentPage = response.data.page
  //   AppState.totalPages = response.data.total_pages
  // }

  async searchProfiles(searchTerm) {
    const response = await api.get(`api/posts?query=${searchTerm}`)
    console.log('', response.data.posts);
    const searchedProfiles = response.data.posts.map(profileData => new Post(profileData))
    AppState.searchingFor = searchTerm
    AppState.posts = searchedProfiles
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }


  async clearSearch() {
    AppState.searchingFor = null
    await this.discoverProfile()
  }

  async discoverProfile() {
    const response = await api.get('api/posts')
    const profile = response.data.map(profileData => new Profile(profileData))
    AppState.posts = profile
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
  }

}
export const profilesService = new ProfilesService()
