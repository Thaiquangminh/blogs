import getters from "@/store/modules/cards/getters";
import actions from "@/store/modules/cards/actions";
import mutations from "@/store/modules/cards/mutations";

export default {
    namespaced: true,
    state() {
        return {
            blogCards: [
                {id: 1, blogTitle: "Blog Card", blogCoverPhoto: "stock-1", blogDate: 'May 15, 2015'},
                {id: 2, blogTitle: "Blog Card", blogCoverPhoto: "stock-2", blogDate: 'May 15, 2015'},
                {id: 3, blogTitle: "Blog Card", blogCoverPhoto: "stock-3", blogDate: 'May 15, 2015'},
                {id: 4, blogTitle: "Blog Card", blogCoverPhoto: "stock-4", blogDate: 'May 15, 2015'}
            ],
            createCardData: null
        }
    },
    getters: getters,
    actions: actions,
    mutations: mutations
}
