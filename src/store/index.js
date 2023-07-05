import Vue from 'vue'
import Vuex from 'vuex'
import cards from "@/store/modules/cards";
import auth from "@/store/modules/auth";
import blogs from "@/store/modules/blogs";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        card: cards,
        auth: auth,
        blog: blogs
    }
})
