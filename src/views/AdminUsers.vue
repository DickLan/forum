<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <Admin-nav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.name }}</td>
          <td>
            <button
              @click.stop.prevent="changeRole(user.id)"
              type="button"
              class="btn btn-link"
            >
              {{ user.isAdmin ? "set as user" : "set as Admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const dummyUsers = {
  users: [
    {
      id: 1,
      name: "admin",
      email: "root@example",
      password: "12345678",
      isAdmin: true,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example",
      password: "12345678",
      isAdmin: false,
    },
  ],
};
import AdminNav from "./../components/AdminNav";
export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyUsers.users;
    },
    changeRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
    },
  },
};
</script>