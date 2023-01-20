/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import { faArrowRight, faChevronDown, faPhone } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faPhone, faArrowRight, faChevronDown, faTwitter, faFacebookF, faInstagram, faYoutube, faLinkedin, faTiktok)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')