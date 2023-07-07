import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "@/views/Blogs.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import Profile from "@/views/Profile.vue";
import BlogDetail from "@/views/BlogDetail.vue";
import store from "@/store";
import CreateBlog from "@/views/CreateBlog.vue";
import BlogPreview from "@/views/BlogPreview.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/blogs",
        name: "Blog",
        component: Blogs,
        meta: {
            needLogin: true
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            loggedIn: true
        }

    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/forgotPassword",
        name: "ForgotPassword",
        component: ForgotPassword,
    },
    {
        path: "/blog/:id",
        name: "BlogDetail",
        component: BlogDetail,
        meta: {
            needLogin: true
        }
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            needLogin: true
        }
    },
    {
        path: "/create-blog",
        name: "CreateBlog",
        component: CreateBlog,
        meta: {
            needLogin: true
        },
    },
    {
        path: "/preview-blog",
        name: "BlogPreview",
        component: BlogPreview,
        props: true,
        meta: {
            needLogin: true
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.needLogin && !store.getters["auth/isAuth"]) {
        next('/login')
    } else if (to.meta.loggedIn && store.getters["auth/isAuth"]) {
        next('/')
    } else {
        next()
    }
})

export default router;
