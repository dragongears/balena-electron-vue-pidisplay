import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

let env = {}

// In production mode get VUE_APP_* environment variables from the background process
if (process.env.NODE_ENV === 'production') {
  const { ipcRenderer } = require('electron')

  env = ipcRenderer.sendSync('request-env-vars')

}

env = Object.assign({}, process.env, env)

// Remove 'VUE_APP_' from the beginning of Vue app environment variable names
Object.keys(env).forEach(key => {
  if (key.startsWith('VUE_APP_')) {
    delete Object.assign(env, {[key.slice(8)]: env[key] })[key]
  }
})

// Make environment variables available as $env in Vue components
Vue.prototype.$env = env

new Vue({
  render: h => h(App),
}).$mount('#app')
