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
          <a href="#"> {{ restaurant.name }}</a>
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
          @click.prevent.stop="changeFavoriteState()"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          @click.prevent.stop="changeFavoriteState()"
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
  },
};
</script>