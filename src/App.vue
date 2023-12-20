<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>


<script>
import "bootstrap"; // 表示要載入 boostrap 的 js 因為在 node_modules/bootstrap/package.json 的 main 中 有指定預設路徑為 "main": "dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";

// export default: 在 vue 中，通常使用這方式來 export ，這是因為通常每個 .vue 文件都只單獨定義一個 Vue component
// 因此，使用 default export 更加簡潔方便
// 在其他地方 import 時，可以用任意名稱接收該模組，並且不需要像具名匯出那樣，使用相同名稱來匯入
// 總地來說，就只是因為 vue 的習慣用法而已
export default {
  components: {
    // 在 components 裡面載入 Navbar ，這表示 Navbar 組件在當前的組件的模板中被註冊為一個可使用的子組件
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
