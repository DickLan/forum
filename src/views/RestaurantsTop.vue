<template>
  <div class="container py-5">
    <Navtabs />
    <h1 class="mt-5">人氣餐廳</h1>
  </div>
</template>


<script>
// 引入 Navtabs 組件，這樣才能在這份 .vue 檔案中使用 <Navtabs /> 標籤
import Navtabs from "./../components/NavTabs.vue";
export default {
  components: {
    Navtabs,
  },
};
</script>