<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <!-- <p>{{ restaurant.description }}</p> -->
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="`/restaurants/${restaurant.id}/dashboard`"
      
        >Dashboard</router-link
      >

      <button
        v-if="restaurant.isFavorited"
        :key="restaurant.id"
        @click="changeFavoriteState"
        type="button"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        @click="changeFavoriteState"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>

      <button
        v-if="restaurant.isLiked"
        @click="changeLikeState"
        type="button"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        v-else
        @click="changeLikeState"
        type="button"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
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
      // console.log("this.restaurant", this.restaurant);
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
  },
};
</script>