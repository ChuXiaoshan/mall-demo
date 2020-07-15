import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index') },
    { path: '/404', component: () => import('@/views/404') },
]

export default new Router({
    routes: constantRouterMap,
})
