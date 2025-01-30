import {createRouter, createWebHistory} from 'vue-router'
import DefaultLayout from './components/DefaultLayout.vue'
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import MyImages from './pages/MyImages.vue';
import SignUp from './pages/SignUp.vue';
import useUserStore from './store/user';

const routes = [{
    path:'/',
    component:DefaultLayout,
    children:[
        {path:'/', name: 'Home', component: Home},
        {path: '/images', name:'MyImages', component: MyImages}
    ],
    beforeEnter: async (to, from, next) => {
        try{
            const userStore = useUserStore();
            await userStore.fetchUser();
            next();
        } catch(error){
            console.error('Failed to fetch data: ', error);
            next(false)
        }

    }
},
{
    path:'/login',
    name:'Login',
    component: Login,
},
{
    path: '/signup',
    name:"SignUp",
    component: SignUp,
},
{
    path: "/:pathMatch(.*)*",
    redirect: '/',
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;