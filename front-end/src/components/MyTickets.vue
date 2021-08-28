<template>
<div class="main">
  <h2>Logged in as: {{user.firstName}} {{user.lastName}} <button @click="logout" class="pure-button pure-button-primary">Logout</button></h2>
  <h1>My Tickets</h1>
</div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'MyTickets',
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
    methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>
