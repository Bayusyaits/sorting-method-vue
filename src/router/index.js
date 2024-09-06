const Home = () =>
    import (
        '@/pages/home/index.vue' /* webpackChunkName: ".@/pages/home" */
    ).then((m) => m.default || m) // get home page
const Sort = () =>
    import (
        '@/pages/sort/index.vue' /* webpackChunkName: ".@/pages/sort" */
    ).then((m) => m.default || m) // get sort page

    import { createRouter, createWebHistory } from 'vue-router'

    const routes = [
        {
            name: 'home',
            path: '/',
            component: Home,
            alias: [
                '/home'
            ]
        }, {
            name: 'sort',
            path: '/sort',
            component: Sort,
            alias: [
                '/bubble-sort'
            ]
        }
    ]
    
    const router = createRouter({
      routes,
      history: createWebHistory(),
      scrollBehavior (to, from, savedPosition) {
        if (from.href && from.name !== to.name && savedPosition) return savedPosition
        return { left: 0, top: 0 }
      },
    })
    
    
    export default router
    