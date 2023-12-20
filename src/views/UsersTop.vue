<template>
  <div class="container py-5">
    <!-- <NavTabs /> -->
    <navtabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            @click.prevent.stop="changeFollowState(user)"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            v-else
            @click.prevent.stop="changeFollowState(user)"
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
// 引入 Navtabs 組件，這樣才能在這份 .vue 檔案中使用 <Navtabs /> 標籤
import Navtabs from "./../components/NavTabs.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$38aB1hVimYQDvl/IhLkLVuSfU9ia1Rv87oAU9iF1kT2rIHTHF.ll.",
      isAdmin: true,
      image: "https://picsum.photos/seed/picsum/200/300",
      createdAt: "2023-12-18T10:10:25.000Z",
      updatedAt: "2023-12-18T10:10:25.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$w3RJqXK9Cf2Lmpt2HrSm.OF6nvqi1GQtRK9lON4jJEST7R9ZPtp8.",
      isAdmin: false,
      image: "https://picsum.photos/200",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$jBkynbu.FI.IdBu1hj5bb.dIgMJeE.zXdm5vFp2rY5oJMmDO4LmlK",
      isAdmin: false,
      image: "https://picsum.photos/200/300?grayscale",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    Navtabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
    changeFollowState(user) {
      user.isFollowed = !user.isFollowed;
    },
  },
};
</script>
