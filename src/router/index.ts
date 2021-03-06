import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import EditProfile from "../views/EditProfile.vue";
import UserProfilePreview from "../views/UserProfilePreview.vue";

Vue.use(VueRouter);

export enum AppRoutes {
  EditProfile = "EditProfile",
  ProfilePreview = "ProfilePreview",
}

const routes: Array<RouteConfig> = [
  { path: "/", redirect: { name: AppRoutes.EditProfile } },
  {
    path: "/edit",
    name: AppRoutes.EditProfile,
    component: EditProfile,
  },
  {
    path: "/preview",
    name: AppRoutes.ProfilePreview,
    component: UserProfilePreview,
  },
  {
    path: "*",
    redirect: {
      name: AppRoutes.EditProfile,
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
