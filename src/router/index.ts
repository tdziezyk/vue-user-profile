import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import EditProfile from "../views/EditProfile.vue";
import UserProfilePreview from "../views/UserProfilePreview.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/preview",
    name: "ProfilePreview",
    component: UserProfilePreview,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
