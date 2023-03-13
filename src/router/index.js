import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Evaluate from '../views/Evaluate.vue'
import Photo from '../views/Photo.vue'
import Followers from '../views/Followers.vue'
import Reminders from '../views/Reminders.vue'
import Introduction from '../views/Introduction.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/evaluate',
      name: 'Evaluate',
      component: Evaluate
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/followers',
      name: 'Followers',
      component: Followers
    },
    {
      path: '/reminders',
      name: 'Reminders',
      component: Reminders
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    }
  ]
})

export default router
