import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import '@/assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import EmojiPicker from 'vue-emoji-picker'
import Contextmenu from "vue-contextmenujs"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(EmojiPicker)
Vue.use(Contextmenu);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
