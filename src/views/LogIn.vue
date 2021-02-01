<template>
  <div>
    <form class="flex flex-col items-center" @submit.prevent="login">
      <div class="flex flex-col user">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">E-mail</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          type="text"
          v-model="email"
          id="email"
        />
      </div>
      <div class="flex flex-col mt-10">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          type="password"
          v-model="password"
        />
      </div>

      <div v-if="error" class="text-red-600 mt-10">{{ error.message }}</div>

      <button class="btn-blue mt-10">Log In</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    email: '',
    password: '',
    error: ''
  }),
  methods: {
    ...mapActions({
      loginVue: 'auth/login'
    }),
    async login () {
      try {
        await this.loginVue({
          email: this.email,
          password: this.password
        })
        this.$router.push('/')
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
