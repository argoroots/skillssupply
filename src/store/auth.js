import { Auth } from 'aws-amplify'

export const auth = {

  namespaced: true,
  state: { user: null },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async logout ({ commit }) {
      commit('setUser', null)
      return await Auth.signOut()
    },
    async login ({ commit }, { email, password }) {
      try {
        await Auth.signIn({
          username: email,
          password
        })

        const userInfo = await Auth.currentUserInfo()
        commit('setUser', userInfo)
        return Promise.resolve()
      } catch (error) {
        console.log(error)
        return Promise.reject(error)
      }
    },
    async confirmSignUp (_, { email, code }) {
      try {
        await Auth.confirmSignUp(email, code)
        return Promise.resolve()
      } catch (error) {
        console.log(error)
        return Promise.reject(error)
      }
    },
    async signUp (_, { email, password }) {
      try {
        await Auth.signUp({
          username: email,
          password,
          attributes: {
            email
          }
        })
        return Promise.resolve()
      } catch (error) {
        console.log(error)
        return Promise.reject(error)
      }
    },
    async authAction ({ commit }) {
      const userInfo = await Auth.currentUserInfo()
      commit('setUser', userInfo)
    }

  },
  getters: {
    user: (state) => state.user
  }
}
