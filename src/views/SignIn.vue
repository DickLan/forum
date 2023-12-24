<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handlerSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <!-- <a href="/signup">Sign Up</a> -->
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";

// 匯出一個 vue component 物件，讓其他地方可以使用 例如上方的 html v-model
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handlerSubmit(e) {
      authorizationAPI
        .signIn({
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log("response=", response);
          const { data } = response;
          // localStorage 是瀏覽器給每個網頁的儲存空間
          // 可以把想儲存的資料放在瀏覽器內
          // 在使用者清除 localStorage 之前，就算關閉網頁，這localStorage仍然存在
          localStorage.setItem("token", data.token);
          // vue router 提供的轉址功能
          this.$router.push("/restaurants");
        });
    },
  },
};
</script>