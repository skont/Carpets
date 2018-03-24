import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Customers from '@/components/Customers'
import AddCustomer from '@/components/AddCustomer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/AddCustomer',
      name: 'AddCustomer',
      component: AddCustomer
    }
  ]
})
