import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue'
import Chats from '../views/Chats.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Signup from '../views/Signup.vue'
import ContactSearch from '../views/ContactSearch.vue'
import About from '../views/About.vue'
import Terms from '../views/Terms.vue'
import Error from '../views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chats',
    name: 'Chats',
    component: Chats
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: Chat,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    props: true
  },
  {
    path: '/contact-search',
    name: 'ContactSearch',
    component: ContactSearch
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/:catchAll(.*)', 
    name: 'Error',
    component: Error
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
