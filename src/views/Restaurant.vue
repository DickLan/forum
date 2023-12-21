<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>

    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initialRestaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurantComments="restaurantComments"
      @after-click-delete-comment="deleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      v-bind:restaurantId="restaurant.id"
      @after-create-comment="createComment"
    />
  </div>
</template>


<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Vicente Schiller",
    tel: "139-934-2455",
    address: "39523 Frank Mill",
    opening_hours: "08:00",
    description: "explicabo",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=59.76423185014346",
    viewCounts: 1,
    createdAt: "2023-12-18T10:10:26.000Z",
    updatedAt: "2023-12-20T09:56:30.492Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 101,
        text: "Et ipsum qui veniam cupiditate inventore saepe amet omnis.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$jBkynbu.FI.IdBu1hj5bb.dIgMJeE.zXdm5vFp2rY5oJMmDO4LmlK",
          isAdmin: false,
          image: null,
          createdAt: "2023-12-18T10:10:26.000Z",
          updatedAt: "2023-12-18T10:10:26.000Z",
        },
      },
      {
        id: 51,
        text: "Dolore ipsam amet.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$w3RJqXK9Cf2Lmpt2HrSm.OF6nvqi1GQtRK9lON4jJEST7R9ZPtp8.",
          isAdmin: false,
          image: null,
          createdAt: "2023-12-18T10:10:26.000Z",
          updatedAt: "2023-12-18T10:10:26.000Z",
        },
      },
      {
        id: 1,
        text: "Voluptate sunt aliquid.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2023-12-18T10:10:26.000Z",
        updatedAt: "2023-12-18T10:10:26.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$38aB1hVimYQDvl/IhLkLVuSfU9ia1Rv87oAU9iF1kT2rIHTHF.ll.",
          isAdmin: true,
          image: null,
          createdAt: "2023-12-18T10:10:25.000Z",
          updatedAt: "2023-12-18T10:10:25.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};
import RestaurantDetail from "./../components/RestaurantDetail.vue";
import RestaurantComments from "./../components/RestaurantComments.vue";
import CreateComment from "./../components/CreateComment.vue";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example",
    image: "https://i.pravatar.cc",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    };
  },
  created() {
    // 從解構賦值取得 id，然後將 id 值傳給一個新變量 restaurantId
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("restaurantId", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.restaurant.isFavorited,
        isLiked: dummyData.restaurant.isLiked,
      };
      this.restaurantComments = dummyData.restaurant.Comments;
    },
    deleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    createComment(payload) {
      console.log("payload", payload);
      console.log("createComment in Restaurant.vue", payload);
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
};
</script>