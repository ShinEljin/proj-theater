import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CinemaView from "../views/CinemaView.vue";
import MoviesView from "../views/MoviesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cinema",
      name: "cinema",
      component: CinemaView,
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesView,
    },
  ],
});

export default router;
