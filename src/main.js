import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import '@/assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import EmojiPicker from 'vue-emoji-picker'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(EmojiPicker)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
