import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SetsView from "../views/SetsView.vue";
import CatchAllView from "../views/CatchAllView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/sets",
    name: "sets",
    component: SetsView,
  },
  {
    path: "/sets/edit:setId",
    name: "edit",
    component: Edit,
  },
  // {
  //   path: "/sets/view:setID",
  //   name: "viewSet",
  //   component: ViewSet,
  // },
  //404
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: CatchAllView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
