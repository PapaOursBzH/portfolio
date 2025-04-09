import { createRouter, createWebHashHistory } from 'vue-router'
import Presentation from '@/views/Presentation.vue'
import Creations from '@/views/Creations.vue'
import Contact from '@/views/Contact.vue'
import NotFound from '@/views/NotFound.vue'


const routes = [
  { path: '/', redirect: '/presentation' },
  { path: '/presentation', name: 'Presentation', component: Presentation },
  { path: '/creations', name: 'Creations', component: Creations },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router