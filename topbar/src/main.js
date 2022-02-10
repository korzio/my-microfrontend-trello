import { createApp } from 'vue'
import BalmUI from 'balm-ui'
import 'balm-ui-css'
import App from './App.vue'

const app = createApp(App)

app.use(BalmUI)

app.mount('#app')