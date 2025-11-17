import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectIntro from '../views/ProjectIntro.vue'
import TechnicalSupport from '../views/TechnicalSupport.vue'
import BusinessCooperation from '../views/BusinessCooperation.vue'
import AboutUs from '../views/AboutUs.vue'
import ProductDownload from '../views/ProductDownload.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project-intro',
    name: 'ProjectIntro',
    component: ProjectIntro
  },
  {
    path: '/technical-support',
    name: 'TechnicalSupport',
    component: TechnicalSupport
  },
  {
    path: '/business-cooperation',
    name: 'BusinessCooperation',
    component: BusinessCooperation
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/product-download',
    name: 'ProductDownload',
    component: ProductDownload
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
