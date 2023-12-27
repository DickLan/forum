<template>
  <div class="container py-5">
    <Navtabs />
    <button @click.stop.prevent="swalTry">Fire</button>
    <!-- 餐廳類別標籤 RestaurantsNavPills -->

    <RestaurantsNavPills v-bind:categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination
      v-if="totalPage.length > 1"
      :categoryId="categoryId"
      :currentPage="page"
      :totalPage="totalPage"
      :previousPage="prev"
      :nextPage="next"
    />
  </div>
</template>

<script>
// 引入 Navtabs 組件，這樣才能在這份 .vue 檔案中使用 <Navtabs /> 標籤
import Navtabs from "./../components/NavTabs.vue";
import RestaurantCard from "./../components/RestaurantCard.vue";
import RestaurantsNavPills from "./../components/RestaurantsNavPills.vue";
import RestaurantPagination from "./../components/RestaurantsPagination.vue";
import { Toast } from "../utils/helpers";
import restaurantsAPI from "./../apis/restaurants";
const dummyData = {
  // restaurants: [
  //   {
  //     id: 1,
  //     name: "Vicente Schiller",
  //     tel: "139-934-2455",
  //     address: "39523 Frank Mill",
  //     opening_hours: "08:00",
  //     description: "explicabo",
  //     image:
  //       "https://loremflickr.com/320/240/restaurant,food/?random=59.76423185014346",
  //     viewCounts: 0,
  //     createdAt: "2023-12-18T10:10:26.000Z",
  //     updatedAt: "2023-12-18T10:10:26.000Z",
  //     CategoryId: 3,
  //     Category: {
  //       id: 3,
  //       name: null,
  //       createdAt: "2023-12-18T10:10:26.000Z",
  //       updatedAt: "2023-12-18T10:10:26.000Z",
  //     },
  //     isFavorited: false,
  //     isLiked: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Miss Hassie Spinka",
  //     tel: "(922) 001-2760 x91030",
  //     address: "826 Eulah Locks",
  //     opening_hours: "08:00",
  //     description: "Dolorum qui voluptatem voluptas. Animi illo in qui",
  //     image: "https://picsum.photos/200/300",
  //     viewCounts: 0,
  //     createdAt: "2023-12-18T10:10:26.000Z",
  //     updatedAt: "2023-12-18T10:10:26.000Z",
  //     CategoryId: 3,
  //     Category: {
  //       id: 3,
  //       name: "義大利料理",
  //       createdAt: "2023-12-18T10:10:26.000Z",
  //       updatedAt: "2023-12-18T10:10:26.000Z",
  //     },
  //     isFavorited: false,
  //     isLiked: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Ari Schmitt",
  //     tel: "(321) 474-6639 x1123",
  //     address: "93727 Meda Way",
  //     opening_hours: "08:00",
  //     description: "Reprehenderit labore nobis.",
  //     image:
  //       "https://loremflickr.com/320/240/restaurant,food/?random=70.26835768963358",
  //     viewCounts: 0,
  //     createdAt: "2023-12-18T10:10:26.000Z",
  //     updatedAt: "2023-12-18T10:10:26.000Z",
  //     CategoryId: 1,
  //     Category: {
  //       id: 1,
  //       name: "中式料理",
  //       createdAt: "2023-12-18T10:10:26.000Z",
  //       updatedAt: "2023-12-18T10:10:26.000Z",
  //     },
  //     isFavorited: false,
  //     isLiked: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Erwin Sawayn DDS",
  //     tel: "1-168-676-6357",
  //     address: "802 Crona Prairie",
  //     opening_hours: "08:00",
  //     description: "Voluptatum illo hic. Nisi odio ratione animi magni",
  //     image:
  //       "https://loremflickr.com/320/240/restaurant,food/?random=5.914028262680193",
  //     viewCounts: 0,
  //     createdAt: "2023-12-18T10:10:26.000Z",
  //     updatedAt: "2023-12-18T10:10:26.000Z",
  //     CategoryId: 2,
  //     Category: {
  //       id: 2,
  //       name: "日本料理",
  //       createdAt: "2023-12-18T10:10:26.000Z",
  //       updatedAt: "2023-12-18T10:10:26.000Z",
  //     },
  //     isFavorited: false,
  //     isLiked: false,
  //   },
  //   {
  //     id: 5,
  //     name: "Brandyn Keeling",
  //     tel: "262-098-0228",
  //     address: "719 Davonte Freeway",
  //     opening_hours: "08:00",
  //     description: "Quia qui et et molestiae aut.",
  //     image:
  //       "https://loremflickr.com/320/240/restaurant,food/?random=75.86278347442384",
  //     viewCounts: 0,
  //     createdAt: "2023-12-18T10:10:26.000Z",
  //     updatedAt: "2023-12-18T10:10:26.000Z",
  //     CategoryId: 2,
  //     Category: {
  //       id: 2,
  //       name: "日本料理",
  //       createdAt: "2023-12-18T10:10:26.000Z",
  //       updatedAt: "2023-12-18T10:10:26.000Z",
  //     },
  //     isFavorited: false,
  //     isLiked: false,
  //   },
  //   {
  //     id: 6,
  //     name: "Theo Lockman II",
  //     tel: "1-168-349-8442 x051",
  //     address: "490 Concepcion Lake",
  //     opening_hours: "08:00",
  //     description: "quas",
  //     image:
  //       "https://loremflickr.com/320/240/restaurant,food/?random=15.789957453312375",
  //     viewCounts: 0,
  //     createdAt: "2023-12-18T10:10:26.000Z",
  //     updatedAt: "2023-12-18T10:10:26.000Z",
  //     CategoryId: 1,
  //     Category: {
  //       id: 1,
  //       name: "中式料理",
  //       createdAt: "2023-12-18T10:10:26.000Z",
  //       updatedAt: "2023-12-18T10:10:26.000Z",
  //     },
  //     isFavorited: false,
  //     isLiked: false,
  //   },
  //   {
  //     id: 7,
  //     name: "Isaiah Jacobi",
  //     tel: "922-292-7612",
  //     address: "78074 Luther Keys",
  //     opening_hours: "08:00",
  //     description: "Sequi officiis similique magnam. Voluptas omnis et",
  //     image:
  //       "https://loremflickr.com/320/240/restaurant,food/?random=93.9188833804987",
  //     viewCounts: 0,
  //     createdAt: "2023-12-18T10:10:26.000Z",
  //     updatedAt: "2023-12-18T10:10:26.000Z",
  //     CategoryId: 3,
  //     Category: {
  //       id: 3,
  //       name: "義大利料理",
  //       createdAt: "2023-12-18T10:10:26.000Z",
  //       updatedAt: "2023-12-18T10:10:26.000Z",
  //     },
  //     isFavorited: false,
  //     isLiked: false,
  //   },
  //   {
  //     id: 8,
  //     name: "Marcella O'Reilly IV",
  //     tel: "851-800-3240 x1633",
  //     address: "31668 Jillian Islands",
  //     opening_hours: "08:00",
  //     description: "Deserunt ex rem est. Provident corporis velit faci",
  //     image:
  //       "https://loremflickr.com/320/240/restaurant,food/?random=38.87350453928355",
  //     viewCounts: 0,
  //     createdAt: "2023-12-18T10:10:26.000Z",
  //     updatedAt: "2023-12-18T10:10:26.000Z",
  //     CategoryId: 1,
  //     Category: {
  //       id: 1,
  //       name: "中式料理",
  //       createdAt: "2023-12-18T10:10:26.000Z",
  //       updatedAt: "2023-12-18T10:10:26.000Z",
  //     },
  //     isFavorited: false,
  //     isLiked: false,
  //   },
  //   {
  //     id: 9,
  //     name: "Dr. Yvette Reichel",
  //     tel: "493.506.3131 x427",
  //     address: "92891 Isobel Ports",
  //     opening_hours: "08:00",
  //     description: "maxime maxime et",
  //     image:
  //       "https://loremflickr.com/320/240/restaurant,food/?random=11.216765151868891",
  //     viewCounts: 0,
  //     createdAt: "2023-12-18T10:10:26.000Z",
  //     updatedAt: "2023-12-18T10:10:26.000Z",
  //     CategoryId: 5,
  //     Category: {
  //       id: 5,
  //       name: "素食料理",
  //       createdAt: "2023-12-18T10:10:26.000Z",
  //       updatedAt: "2023-12-18T10:10:26.000Z",
  //     },
  //     isFavorited: false,
  //     isLiked: false,
  //   },
  //   {
  //     id: 10,
  //     name: "Scotty Hagenes",
  //     tel: "(921) 966-6582 x662",
  //     address: "396 Maude Crest",
  //     opening_hours: "08:00",
  //     description: "Deserunt sint voluptatibus distinctio dicta occaec",
  //     image:
  //       "https://loremflickr.com/320/240/restaurant,food/?random=20.034192635447123",
  //     viewCounts: 0,
  //     createdAt: "2023-12-18T10:10:26.000Z",
  //     updatedAt: "2023-12-18T10:10:26.000Z",
  //     CategoryId: 5,
  //     Category: {
  //       id: 5,
  //       name: "素食料理",
  //       createdAt: "2023-12-18T10:10:26.000Z",
  //       updatedAt: "2023-12-18T10:10:26.000Z",
  //     },
  //     isFavorited: false,
  //     isLiked: false,
  //   },
  // ],
  restaurants: [],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
  ],

  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: "",
};

export default {
  components: {
    Navtabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination,
    // eslint-disable-next-line vue/no-unused-components
  },
  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      page: 1,
      currentPage: -1,
      totalPage: [],
      prev: -1,
      next: -1,
      categoryId: -1,
      users: [],
    };
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({
      queryPage: page,
      queryCategoryId: categoryId,
    });
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });
        console.log("response", response);
        const {
          restaurants,
          categories,
          page,
          totalPage,
          prev,
          next,
          categoryId,
        } = response.data;
        this.restaurants = restaurants;
        this.categories = categories;
        this.page = page;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.prev = prev;
        this.next = next;
        this.categoryId = categoryId;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },

    swalTry() {
      console.log("6666");
      Toast.fire({
        icon: "success",
        title: "Sign in SSSSS",
      });
    },
  },
};
</script>