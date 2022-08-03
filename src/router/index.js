import {createRouter,createWebHistory} from 'vue-router'
import LeftMenuPage from '@/views/LeftMemuPage'
const routes = [
    {
        path: '/',
        component: LeftMenuPage
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router