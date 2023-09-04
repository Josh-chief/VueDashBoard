import Register from '../views/auth/Register'
import Login from '../views/auth/Login'
import GuestLayout from '../components/layouts/GuestLayout'
import Menu from '../views/Menu'
import Transactions from '../views/Transactions'
import Help from '../views/Help'
import Orders from '../views/Orders'

import AppLayout from '../components/layouts/AppLayout'






export default [
  {
    path: '/auth/register',
    name: 'Register',
    component: Register,
    meta: { layout: GuestLayout },
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    meta: { layout: GuestLayout },
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu,
    meta: { layout: AppLayout },
  },

  {
    path: '/Transactions',
    name: 'Transactions',
    component: Transactions,
    meta: { layout: AppLayout },
  },

  {
    path: '/Help',
    name: 'Help',
    component: Help,
    meta: { layout: AppLayout },
  },
  {
    path: '/Orders',
    name: 'Orders',
    component: Orders,
    meta: { layout: AppLayout },
  },
]
