
<template>
  <div id="user-profile-card">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <img :src="user.image" alt="" />
        <a href="#" class="btn btn-primary">編輯個人資料</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>