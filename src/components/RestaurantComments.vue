<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click="clickDeleteComment(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#"> {{ comment.User.name }} </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example",
    image: "https://i.pravatar.cc",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      currentUser: dummyUser.currentUser,
    };
  },
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clickDeleteComment(commentId) {
      this.$emit("after-click-delete-comment", commentId);
    },
  },
};
</script>