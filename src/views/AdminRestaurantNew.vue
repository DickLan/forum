<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm />
    <span>new</span>
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm";

export default {
  components: {
    AdminRestaurantForm,
  },
};
</script>
