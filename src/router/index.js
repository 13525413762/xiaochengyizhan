import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dian from '../components/dian.vue'
import pin from '../components/pin.vue'
import kan from '../components/kan.vue'
import wo from '../components/wo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:dian},
    {path:'/dian',component:dian},
    {
     path: '/pin',
      component: pin
    },{path:'/kna',component:pin},
   {path:'/wo',component:wo},

  ]
})
