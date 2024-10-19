import { createApp } from 'vue'
import App from './App.vue'

// Import Css Style
import './assets/css/style.css'


// import Prime Vue
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'


// import i18n configuration
import i18n from './plugins/i18n'; 



createApp(App)
.use(i18n)
.use(PrimeVue)
.mount('#app')
