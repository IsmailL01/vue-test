import CardPage from "@/pages/CardPage.vue";
import HomePage from "@/pages/HomePage.vue";
import CardsPage from "@/pages/CardsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/cards",
    component: CardsPage,
  },
  {
    path: "/item/:id",
    component: CardPage,
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
