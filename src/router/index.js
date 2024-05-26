import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import OffersView from "../views/Offers.vue";
import NewAdView from "../views/NewAd.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/offers",
      name: "offers",
      component: OffersView,
    },
    {
      path: "/newad",
      name: "newad",
      component: NewAdView,
    }
  ],
});

export default router;
