import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    // console.log('searchParams', searchParams)
    console.log('searchParams.toString()', searchParams.toString())
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurantsFeeds() {
    return apiHelper.get('/restaurants/feeds', { headers: { Authorization: `Bearer ${getToken()}` } })
  }
}