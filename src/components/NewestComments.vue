<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <a href="#"> {{ comment.Restaurant.name }} </a>
        </h4>
        <p>{{ comment.text }}</p>
        by
        <a href="#"> {{ comment.User.name }} </a>
        {{ comment.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import moment from "moment";

export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  filters: {
    fromNow(datetime) {
      return moment(datetime).fromNow();
    },
  },
};
</script>