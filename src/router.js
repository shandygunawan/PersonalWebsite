import { createRouter, createWebHistory } from 'vue-router';

// Pages
import PageIndex from './pages/PageIndex.vue';
import PageResume from './pages/PageResume.vue';
import PageProjects from './pages/PageProjects'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: PageIndex },
    { path: '/resume', component: PageResume },
    { path: '/projects', component: PageProjects }
  ]
});

export default router;