import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import nopage from '../views/nopage.vue'

Vue.use(VueRouter)

const routes = [
    {
        name:'Home',
        path:'/',
        component: Home
    },
    {
        name:'About',
        path:'/about',
        component:About
    }, 
    {
        name:'nopage',
        path:'*/',
        component:nopage
    }
]

let router = new VueRouter({
    routes:routes,
    mode:'history'
})

export default router