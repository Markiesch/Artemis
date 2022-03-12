import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/over-ons",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/nieuws/:id",
    name: "Article",
    component: () => import("../views/Article.vue"),
  },
  {
    path: "/nieuws",
    name: "Nieuws",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/adopteren",
    name: "Adopt",
    component: () => import("../views/Adopt.vue"),
  },
  {
    path: "/doneren",
    name: "Donate",
    component: () => import("../views/Donate.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes,
});
