<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"> 餐廳評論網 </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    ></button>

    <router-link class="nav-link" style="color: white" to="/users/1"
      >User</router-link
    >

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- 不用 div包裹而採用template 是為了不影響排版 -->
        <template v-if="isAuthenticated">
          <!-- if user is admin -->
          <router-link to="#" class="text-white mr-3"> 管理員後台 </router-link>

          <!-- if user is login -->
          <router-link to="#" class="text-white mr-3">
            使用者 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
// seed data
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
  },
  isAuthenticated: true,
};
export default {
  // Vue 會在沒有資料時使用此預設值
  data() {
    return {
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      // 使用展開運算子來將兩組資料打開
      // 在 key 相同的情況下，後面的資料會覆蓋前面的資料
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
    },
  },
};
</script>