import { AppState } from "../AppState.js"
import { Ads } from "../models/Ads.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AdsService {

  async getAds() {
    const response = await api.get('api/ads')
    logger.log('Ads!!!!', response.data)
    const ads = response.data.map(adPOJO => new Ads(adPOJO))
    AppState.ads = ads
  }
}

export const adsService = new AdsService()
