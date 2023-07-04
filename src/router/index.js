import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "@/views/Blogs.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import BlogDetail from "@/views/BlogDetail.vue";
import Profile from "@/views/Profile.vue";

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
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/forgotPassword",
        name: "Forgot Password",
        component: ForgotPassword,
    },
    {
        path: "/blog/:id",
        name: "Blog Detail",
        component: BlogDetail,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
