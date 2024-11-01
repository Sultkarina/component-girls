import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import './styles/_global.scss';

loadFonts()

const app = createApp(App)

const pinia = createPinia()


app.use(pinia)
app.use(vuetify)
app.mount('#app')
