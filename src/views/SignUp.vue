<template>
  <div>
    <form v-if="!confirmPassword" class="flex flex-col items-center" @submit.prevent="signUp">
      <div class="flex flex-col">
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
      <button class="btn-blue mt-10">Sign Up</button>
    </form>
    <div v-if="confirmPassword" class="flex flex-col items-center">
      <h3>Enter your code. Please check your email</h3>
      <div class="flex flex-col mt-10">
        <label class="block text-gray-700 text-sm font-bold" for="code">Code</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          type="text"
          v-model="code"
          id="code"
        />
      </div>
      <div v-if="error" class="text-red-600 mt-10">{{ error.message }}</div>
      <button class="btn-blue mt-10" @click="confirmSignUp">Confirm Code</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    password: '',
    email: '',
    error: '',
    confirmPassword: false,
    code: ''
  }),
  methods: {
    async signUp () {
      if (!this.email || !this.password) {
        return
      }
      try {
        await this.$store.dispatch('auth/signUp', {
          email: this.email,
          password: this.password
        })

        this.confirmPassword = true
        this.error = ''
      } catch (error) {
        this.error = error
      }
    },
    async confirmSignUp () {
      if (!this.email || !this.code) {
        return
      }

      try {
        const { email, password, code } = this
        await this.$store.dispatch('auth/confirmSignUp', {
          email,
          code
        })
        await this.$store.dispatch('auth/login', {
          email,
          password
        })
        this.$router.push('/')
      } catch (error) {
        console.log(error)
        this.error = error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
