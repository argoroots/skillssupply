<template>
  <div>
    <ul class="flex justify-end">
      <li class="mr-6" v-if="!user">
        <router-link to="/login">
          <a class="text-blue-500 hover:text-blue-800 cursor-pointer">Log In</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="!user">
        <router-link to="/signup">
          <a class="text-blue-500 hover:text-blue-800 cursor-pointer">Sign Up</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="user">
        <div class="text-black-500">Welcome {{ user.attributes.email }}</div>
      </li>
      <li class="mr-6" v-if="user">
        <a class="text-blue-500 hover:text-blue-800 cursor-pointer" @click:prevent="logout">Log Out</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
