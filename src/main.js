import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$http = axios
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/css/common.scss'
import '../static/css/my-mint.scss'
import './moudles/rem.js'
import { MessageBox, Toast } from 'mint-ui';
Vue.prototype.$message = MessageBox;
Vue.prototype.$toast = Toast;

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
