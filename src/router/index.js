import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import OurServices from '../views/OurServices.vue'
import FAQ from '../views/FAQ.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/our-services',
    name: 'OurServices',
    component: OurServices
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
]

const router = new VueRouter({
  routes
})

export default router
