import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index')
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login')
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
