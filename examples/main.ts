import { createApp } from 'vue'
import App from './src/app.vue'
import astraUI from 'astra-ui'

const app = createApp(App)
app.use(astraUI).mount('#app')