import getters from "@/store/modules/blogs/getters";
import actions from "@/store/modules/blogs/actions";
import mutations from "@/store/modules/blogs/mutations";

export default {
    namespaced: true,
    state() {
        return {
            blogs: [
                {
                    id: 1,
                    title: "DYNAMIC PAGE TITLES WITH THE VUE ROUTER",
                    blogHTML: 'In this video we take a look at creating dynamic page titles using the Vue 3 router.',
                    blogCoverPhoto: 'https://firebasestorage.googleapis.com/v0/b/fireblogs-50850.appspot.com/o/documents%2FcoverPhoto%2FVue%20Router%20-%20Page%20Titles.png?alt=media&token=3276b1b3-3709-4ff0-bd4a-2de3acd1ad65',
                    blogDate: 'May 15, 2015',
                    linkUrl: 'https://lnkd.in/euyw7Sd'
                },
                {
                    id: 2,
                    title: "CSS TRANSFORM: SKEWY | CREATE A SLANTED/SKEWED DIV",
                    blogHTML: 'In this video, we will take a look at the "transform" property in CSS. It\'s used to handle situations where we want to alter the appearance of an element. It has many cases where it can be used. Today, we are going to look at how we can create a slanted/skewed div using this property!',
                    blogCoverPhoto: 'https://firebasestorage.googleapis.com/v0/b/fireblogs-50850.appspot.com/o/documents%2FcoverPhoto%2FAccordion-Menu-Vue-js.png?alt=media&token=b784caca-5998-4af3-bb32-51a45f287cb6',
                    blogDate: 'May 15, 2015',
                    linkUrl: 'https://lnkd.in/ewmdPSs'
                },
                {
                    id: 3,
                    title: "10 Tips for Writing Clean Code",
                    blogHTML: 'Clean code is a reader-focused development style that produces software that\'s easy to write, read and maintain. Knowing how to produce clean code is an essential skill for software developers. Often, you may be tempted to consider your work complete when the application operates as expected. But we\'re not merely writing code for computer consumption.',
                    blogCoverPhoto: 'https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
                    blogDate: 'May 15, 2015',
                    linkUrl: 'https://www.pluralsight.com/blog/software-development/10-steps-to-clean-code'
                }
            ],
        }
    },
    getters: getters,
    actions: actions,
    mutations: mutations
}
