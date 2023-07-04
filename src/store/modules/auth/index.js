import getters from "@/store/modules/auth/getters";
import actions from "@/store/modules/auth/actions";
import mutations from "@/store/modules/auth/mutations";

export default {
    namespaced: true,
    state() {
        return {
            info: {
                firstname: 'Default',
                lastname: 'User',
                username: 'Username',
                email: '',
            },
            userId: null,
            token: null,
            expire: null,
        }
    },
    getters: getters,
    actions: actions,
    mutations: mutations
}
