import getters from "@/store/modules/auth/getters";
import actions from "@/store/modules/auth/actions";
import mutations from "@/store/modules/auth/mutations";

export default {
    namespaced: true,
    state() {
        return {
            email: '',
            userId: null,
            token: null,
            expire: null,
        }
    },
    getters: getters,
    actions: actions,
    mutations: mutations
}
