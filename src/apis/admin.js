
import { data } from "jquery";
import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories', {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    },

  },
  restaurants: {
    create({ jsonData }) {
      return apiHelper.post('/admin/restaurants', jsonData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update({ restaurantId, jsonData }) {
      return apiHelper.put(`/admin/${restaurantId}`, jsonData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
  },
}