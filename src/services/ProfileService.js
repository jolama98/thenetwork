import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfileService {
  async getProfileById(id) {
    const response = await api.get(`api/profiles/${id}`)
    logger.log(response)
    AppState.activeProfile = new Account(response.data)
  }
}
export const profileService = new ProfileService()
