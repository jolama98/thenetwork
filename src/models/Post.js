export class Post {
  constructor(data) {
    this.id = data.id || data._id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
    this.likes = data.likes

  }


}

// const posts = {


//   "likeIds": [],

//   "updatedAt": "2024-07-19T19:45:10.618Z",
//   "__v": 0,
//   "creator": {
//     "_id": "63922fd4274d85e20428e306",
//     "subs": [
//       "auth0|63922fd3f27265590db73a6a"
//     ],
//     "email": "b.chilling@fast9.gov",
//     "name": "Bob Bigus",
//     "picture": "https://external-preview.redd.it/rHKyHWYDMBhXdD77GySZNrn7--6BHE2MAAo_6kvRA6w.png?width=640&crop=smart&format=pjpg&auto=webp&s=b714b97048a58f25381a68c3b1ea8be5feb27083",
//     "bio": "",
//     "coverImg": "https://external-preview.redd.it/rHKyHWYDMBhXdD77GySZNrn7--6BHE2MAAo_6kvRA6w.png?width=640&crop=smart&format=pjpg&auto=webp&s=b714b97048a58f25381a68c3b1ea8be5feb27083",
//     "github": "https://github.com",
//     "linkedin": "",
//     "resume": "https://youtube.com",
//     "class": "Every Class",
//     "graduated": false,
//     "createdAt": "2023-06-29T23:42:59.532Z",
//     "updatedAt": "2024-04-18T18:09:59.241Z",
//     "__v": 0,
//     "id": "63922fd4274d85e20428e306"
//   },
//   "likes": [],
//   "id": "669ac2466e72084b8355cd7d"

// }
// const creator = {
//   "_id": "63922fd4274d85e20428e306",
//   "subs": [
//     "auth0|63922fd3f27265590db73a6a"
//   ],
//   "email": "b.chilling@fast9.gov",
//   "name": "Bob Bigus",
//   "picture": "https://external-preview.redd.it/rHKyHWYDMBhXdD77GySZNrn7--6BHE2MAAo_6kvRA6w.png?width=640&crop=smart&format=pjpg&auto=webp&s=b714b97048a58f25381a68c3b1ea8be5feb27083",
//   "bio": "",
//   "coverImg": "https://external-preview.redd.it/rHKyHWYDMBhXdD77GySZNrn7--6BHE2MAAo_6kvRA6w.png?width=640&crop=smart&format=pjpg&auto=webp&s=b714b97048a58f25381a68c3b1ea8be5feb27083",
//   "github": "https://github.com",
//   "linkedin": "",
//   "resume": "https://youtube.com",
//   "class": "Every Class",
//   "graduated": false,
//   "createdAt": "2023-06-29T23:42:59.532Z",
//   "updatedAt": "2024-04-18T18:09:59.241Z",
//   "__v": 0,
//   "id": "63922fd4274d85e20428e306"
// }
