import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/Sign'
import Interactive from '@/components/Interactive'
import Process from '@/components/Process'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/Interactive',
      name: 'Interactive',
      component: Interactive
    },
    {
      path: '/Process',
      name: 'Process',
      component: Process
    },

    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
