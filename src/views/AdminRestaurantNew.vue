<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
    <span>new</span>
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm";

export default {
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit(formData) {
      // 之後要透過 api 將表單資料傳給伺服器
      console.log("trigger handleAfterSubmit");
      for (let [key, value] of formData) {
        console.log(key + ":" + value);
      }
    },
  },
};
</script>
