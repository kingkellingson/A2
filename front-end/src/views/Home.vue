<template>
<div>
  <MyTickets v-if="user" />
  <HomePage v-else />
</div>
</template>



<script>
import HomePage from '@/components/HomePage.vue'
import MyTickets from '@/components/MyTickets.vue'
export default {
  name: 'home',
  components: {
    HomePage,
    MyTickets
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>


