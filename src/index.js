import TwitterFeed from "./TwitterFeed.vue";

export default {
    install(Vue, options) {
        Vue.component("TwitterFeed", TwitterFeed);
    }
}