import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import YourSets from "../views/userSets/YourSets.vue";
import EditView from "../views/userSets/EditView.vue";
import SetsView from "../views/SetsView.vue";
import CatchAllView from "../views/CatchAllView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/yoursets",
    name: "yoursets",
    component: YourSets,
  },
  {
    path: "/yoursets/:id",
    name: "EditView",
    component: EditView,
    props: true,
  },
  {
    path: "/sets",
    name: "sets",
    component: SetsView,
  },

  //404
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: CatchAllView,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      important(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
