<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{
          restaurant.Category.name ? restaurant.Category.name : "未分類"
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <!-- 保險起見 只要是瀏覽器事件 都串上 .stop.prevent -->
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-if="restaurant.isFavorited"
          @click.prevent.stop="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          @click.prevent.stop="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          v-if="restaurant.isLiked"
          @click.stop.prevent="changeLikeState"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          v-else
          @click.stop.prevent="changeLikeState"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import usersAPI from "./../apis/users";
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    changeFavoriteState() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: !this.restaurant.isFavorited,
      };
    },
    changeLikeState() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: !this.restaurant.isLiked,
      };
    },
    async addFavorite(restaurantId) {
      console.log(3);
      console.log("restaurantId", restaurantId);
      // 傳入的參數是物件 要記得!!!
      const response = await usersAPI.addFavorite({ restaurantId });
      const data = response.data;
      console.log(1);
      console.log("response", response);
      console.log("data", data);
      console.log(2);
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true,
      };
    },
    async deleteFavorite(restaurantId) {
      console.log(3);
      console.log("restaurantId", restaurantId);
      // 傳入的參數是物件 要記得!!!
      const response = await usersAPI.deleteFavorite({ restaurantId });
      const data = response.data;
      console.log(1);
      console.log("response", response);
      console.log("data", data);
      console.log(2);
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false,
      };
    },
  },
};
</script>