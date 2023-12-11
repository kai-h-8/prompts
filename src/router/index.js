import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/calendar',
        name: 'PromptCalendar',
        component: () => import('../components/PromptCalendar.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;