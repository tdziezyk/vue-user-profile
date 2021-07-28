import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import EditProfile from "../views/EditProfile.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/about",
    name: "ProfilePreview",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
