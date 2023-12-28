import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  addFavorite({ restaurantId }) {
    console.log("restaurantId in users.js", restaurantId);
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFavorite({ restaurantId }) {
    console.log("restaurantId in users.js", restaurantId);
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, { headers: { Authorization: `Bearer ${getToken()}` } })
  }
  ,
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
  }
}