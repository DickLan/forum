<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      text: "",
    };
  },
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
      console.log("handleSubmit in CreateComment.vue", this.text);
      this.$emit("after-create-comment", {
        text: this.text,
        commentId: uuidv4(), // 有 api 後，這comment id會由後端產生
        restaurantId: this.restaurantId,
      });
      this.text = "";
    },
  },
};
</script>