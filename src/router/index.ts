import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/nieuws/:id",
    name: "Article",
    component: () => import("../views/nieuws.vue"),
  },
  {
    path: "/nieuws",
    name: "Nieuws",
    component: () => import("../views/nieuws.vue"),
  },
  {
    path: "/overzicht",
    name: "Overzicht",
    component: () => import("../views/Overzicht.vue"),
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
