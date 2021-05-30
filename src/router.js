import { createRouter, createWebHistory } from 'vue-router';

// Pages
import PageIndex from './pages/PageIndex.vue';
import PageResume from './pages/PageResume.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: PageIndex },
    { path: '/resume', component: PageResume }
  ]
});

export default router;