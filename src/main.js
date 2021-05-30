import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

// PrimeVue
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/nova/theme.css';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 2000
});

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {ripple: true});

app.component("Button", Button);
app.component("Avatar", Avatar);
app.component("Card", Card);

app.mount('#app');
