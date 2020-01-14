import Vue from 'vue'
import './components'
import { getInitConfig } from './ipc'
import store from './store'
import App from './App'
import { init as initShortcut } from './shortcut'
require('./ipc')

Vue.config.productionTip = false

// 启动应用时获取初始化数据
getInitConfig()
initShortcut(store.state.appConfig)

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
