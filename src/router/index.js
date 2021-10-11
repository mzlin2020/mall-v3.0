import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载
const Home = () => import('../view/Home/Home.vue')
const Category = () => import('../view/Category/Category.vue')
const Cart = () => import('../view/Cart/Cart.vue')
const Profile = () => import('../view/Profile/Profile.vue')
const ProfileOk = () => import('../view/Profile/ProfileOk.vue')
const Detail = () => import('../view/detail/Detail.vue')
//注册
const Register = () => import('../view/Login/Register.vue') 
const Login = () => import('../view/Login/Login.vue')
// 反馈
const Feedback = () => import('../view/Feedback/Feedback.vue')
// 确认订单
const Purchase = () => import('../view/Purchase/Purchase.vue')


const routes = [
    { path: '/', redirect: '/home' }, 
    { path: '/home', component: Home, name: 'home' },
    { path: '/category', component: Category, name: 'category'}, 
    { path: '/cart', component: Cart, name: 'cart'}, 
    { path: '/profile', component: Profile, name: 'profile' }, 
    { path: '/detail/:iid', component: Detail, name: 'detail' }, 
    { path: '/register', component: Register, name: 'register'}, 
    { path: '/login', component: Login, name: 'login' }, 
    { path: '/profileOk', component: ProfileOk, name: 'profileOk'}, //登录成功的用户界面
    { path: '/feedback', component: Feedback, name: 'feedback' },
    { path: '/purchase', component: Purchase, name:'purchase' }

]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

export default router //将路由实例导出


// 未登录进行跳转
// const token = localCache.getCache('token')
// router.beforeEach((to, from, next) => {
//     if(token || to.name === 'login') { //如果有，说明已登录
//         console.log(token);
//         next()  
//     } else {
//         next({ path:'/login' })
//     }
// })
