<template>
  <ul class="nav nav-pills mb-4">
    <li class="nav-item">
      <router-link to="/restaurants" class="nav-link"> 全部 </router-link>
    </li>

    <li v-for="category in categories" :key="category.id" class="nav-item">
      <!--  to="/restaurants" 等於  -->
      <!--   to="{name:'restaurants'}" -->
      <!-- 這個對應是在 index 裡面設定的 -->
      <!-- 記得 to 要加 : -> :to -->
      <router-link
        class="nav-link"
        :to="{ name: 'restaurants', query: { categoryId: category.id } }"
      >
        {{ category.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>