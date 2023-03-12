import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CinemaView from "../views/CinemaView.vue";
import MoviesView from "../views/MoviesView.vue";
import MovieBook from "../views/MovieBook.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cinemas",
      name: "cinemas",
      component: CinemaView,
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesView,
    },
    {
      path: "/movies/:movie",
      name: "movieBook",
      component: MovieBook,
    },
  ],
});

export default router;
