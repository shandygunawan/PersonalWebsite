//
// IMPORTS
//

// Vue
import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

// Mixin
import titleMixin from './mixins/titleMixin.js';

// PrimeVue
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import Timeline from 'primevue/timeline';
import Fieldset from 'primevue/fieldset';
import ProgressBar from 'primevue/progressbar';
import Carousel from 'primevue/carousel';
import Chips from 'primevue/chips';
import 'primeflex/primeflex.css';
import "primeicons/primeicons.css"
import 'primevue/resources/themes/nova/theme.css';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
	faEnvelope,
	faFilePdf,
	faLink
} from "@fortawesome/free-solid-svg-icons";
import { 
	faGithub,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

//
// MAIN
//

// Vue
const app = createApp(App);
app.use(router);
app.mixin(titleMixin);

// PrimeVue
app.use(PrimeVue, {ripple: true});
app.component("Button", Button);
app.component("Avatar", Avatar);
app.component("Card", Card);
app.component("Timeline", Timeline);
app.component("Fieldset", Fieldset);
app.component("ProgressBar", ProgressBar);
app.component("Carousel", Carousel);
app.component("Chips", Chips);

// FontAwesome
library.add(faGithub, faLinkedin, faEnvelope, faFilePdf, faLink);
app.component('font-awesome-icon', FontAwesomeIcon);

// AOS
AOS.init({
  duration: 2000
});

app.mount('#app');
