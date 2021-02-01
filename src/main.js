import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import AwsExports from './aws-exports'

Amplify.configure(AwsExports)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
