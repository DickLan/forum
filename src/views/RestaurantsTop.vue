<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="`/restaurants/${restaurant.id}`"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              @click="changeFavoriteStatus(restaurant)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click="changeFavoriteStatus(restaurant)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Pattie Keeling",
      tel: "640.852.0048 x744",
      address: "401 Vilma Run",
      opening_hours: "08:00",
      description: "soluta et dolores",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.267825861816",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Mrs. Stanford Wuckert",
      tel: "341.626.9864 x88518",
      address: "6653 Sylvia Rue",
      opening_hours: "08:00",
      description: "Ea vel praesentium. Voluptate voluptate amet asper",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.533556629126115",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Cydney Adams",
      tel: "(314) 266-0137",
      address: "3210 Nikita Rapids",
      opening_hours: "08:00",
      description: "Qui reprehenderit illo rem possimus optio fuga omn",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.44595090166834",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Vito Gottlieb",
      tel: "(698) 483-4804 x6607",
      address: "010 Deon Corners",
      opening_hours: "08:00",
      description: "Nobis qui ipsum facere ut quas esse consequuntur e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.43107075301615",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Doris Altenwerth",
      tel: "(770) 275-4188 x496",
      address: "91463 Bradly Bridge",
      opening_hours: "08:00",
      description: "Facere impedit expedita ab debitis totam et et inv",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.2343241504877",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Jazmin Cartwright III",
      tel: "509.289.4995",
      address: "2959 Gilbert Port",
      opening_hours: "08:00",
      description: "Dignissimos aut ut vitae. Nulla eligendi cum qui o",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.23452590444304",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Dr. Linwood Schamberger",
      tel: "713.234.9864",
      address: "35801 Lindgren Haven",
      opening_hours: "08:00",
      description: "Ut aperiam qui et. Tempore facilis non neque volup",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.211033853801634",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Moises Little",
      tel: "799.563.1305 x61124",
      address: "5226 Hermiston Drives",
      opening_hours: "08:00",
      description: "Consequatur reprehenderit omnis nesciunt repellat ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=23.977295878150162",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Marcelino Bradtke",
      tel: "493-200-0755 x4363",
      address: "479 Hilpert Mews",
      opening_hours: "08:00",
      description: "Et optio reprehenderit voluptas aut porro et sed l",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.97991664408933",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Cordie Bahringer DDS",
      tel: "044-785-0949 x6567",
      address: "728 Muller Falls",
      opening_hours: "08:00",
      description: "Voluptas et temporibus et. Iure officiis voluptas ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.577066040733207",
      viewCounts: 0,
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

// 引入 Navtabs 組件，這樣才能在這份 .vue 檔案中使用 <Navtabs /> 標籤
import Navtabs from "./../components/NavTabs.vue";
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Navtabs,
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
      console.log("this.restaurants", this.restaurants);
    },
    changeFavoriteStatus(restaurant) {
      restaurant.isFavorited = !restaurant.isFavorited;
    },
  },
};
</script>