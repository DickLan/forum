<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
    <span>new</span>
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminRestaurantForm,
  },
  methods: {
    async handleAfterSubmit(formData) {
      // 之後要透過 api 將表單資料傳給伺服器
      try {
        const response = await adminAPI.restaurants.create({ formData });
        console.log("response", response);
        // const data = await adminAPI.restaurants.create({
        //   formData,
        // });
        // console.log("data2", data);
        // if (response.status !== 200) {
        //   throw new Error(response.statusText);
        // }
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳，請稍後再試",
        });
      }
    },
  },
};
</script>
