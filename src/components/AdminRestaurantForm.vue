<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select id="categoryId" class="form-control" name="categoryId" required>
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.opening_hours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        width="200"
        class="d-block img-thumbnail mb-3"
        alt=""
      />
      <input
        id="image"
        v-on:change="handleFileChange"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
      />
    </div>

    <button type="submit" class="btn btn-primary">送出</button>
  </form>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2023-12-18T10:10:26.000Z",
      updatedAt: "2023-12-18T10:10:26.000Z",
    },
  ],
};

export default {
  data() {
    return {
      restaurant: {
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant,
    };
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories;
    },
    handleFileChange(event) {
      // console.log("event.target", event.target);
      // console.log("event.target.files", event.target.files);
      const { files } = event.target;
      console.log("files", files);
      if (!files.length) {
        // 當沒有檔案時
        this.restaurant.image = "";
      } else {
        // 當有檔案時
        const imageURL = window.URL.createObjectURL(files[0]);
        this.restaurant.image = imageURL;
      }
    },
    handleSubmit(e) {
      // console.log(e);
      const form = e.target;
      console.log("form", form);
      // 透過 new FormData 來產生物件實例，並存放到 formData 變數中
      const formData = new FormData(form);
      console.log("formData", formData);
      // 要取得表單的內容 則可以透過 formData.entries() 來逐項取得表單的欄位名稱與值
      // for (let [name, value] of formData.entries()) {
      //   console.log(name, value);
      // }
      this.$emit("after-submit", formData);
    },
  },
  props: {
    initialRestaurant: {
      type: Object,
      // 當資料不是必填時 通常會設定 default
      // 因為要回傳的是物件 所以要在 {}外面包一層小括號
      // 因為若只寫 ()=>{} 會是一般函式，沒辦法傳物件
      default: () => ({
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      }),
    },
  },
};
</script>
