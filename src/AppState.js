import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/Post.js').Post[]} */
  posts: [],
  /** @type {import ('./models/Post.js').Post} */
  activePost: null,
  currentPage: 1,
  totalPages: Infinity,

  /** @type {import('./models/Ads.js').Ads[]} */
  ads: [],

  /** @type {import('./models/Account.js').Account}*/
  activeProfile: null,
})
