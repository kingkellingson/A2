<template>
<div class="main">
  <h2>Logged in as: {{user.firstName}} {{user.lastName}}</h2>
  <h1>My Tickets</h1>
</div>
</template>


<script>
export default {
  name: 'MyTickets',
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>
