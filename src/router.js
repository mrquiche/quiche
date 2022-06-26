import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/Home";
// import SearchBar from "@/components/SearchBar";
// import NodeNav from "@/components/NodeNav";
import NodeDetails from "@/views/NodeDetails";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/nodes/:pubkey",
      name: "pubkey",
      component: NodeDetails,
    },
  ],
});
