<template>
  <div class="container py-5">
    <!-- form file handle 要在 form dom 上設定 @submit.stop.prevent -->
    <form @submit.stop.prevent="handleFileSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          v-model="user.name"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <!-- <label for="image">Image</label> -->
        <img :src="user.image" width="200" height="200" alt="" />
        <input
          id="image"
          type="file"
          @change="handelFileChange"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  name: "Vicente Schiller",
  image: "https://i.pravatar.cc/300?img=1",
};

export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
      },
    };
  },
  methods: {
    fetchUser() {
      this.user = {
        ...dummyUser,
      };
    },
    handelFileChange(event) {
      const { files } = event.target;
      console.log("files", files);
      if (files.length) {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      } else {
        this.user.image = "";
      }
    },
    handleFileSubmit(event) {
      console.log("event.target", event.target);
      const form = event.target;
      const formData = new FormData(form);
      console.log("formData", formData);
      // 後續準備傳送到 server
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>
