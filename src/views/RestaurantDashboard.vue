
<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Judy's Kitchen",
    categoryName: "鍋類",
    image: "https://loremflickr.com/320/240/food,dessert",
    openingHours: "08:00",
    tel: "0123456789",
    address: "高雄市",
    description: "很好吃的鍋類",
    isFavorited: false,
    isLiked: false,
    commentsLength: 2,
    viewCounts: 0,
  },
};

export default {
  data() {
    return {
      restaurant: {
        ...dummyData.restaurant,
      },
    };
  },
};
</script>