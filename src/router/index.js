import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "User1",
      component: () => import("../views/User1.vue"),
      props: { name: "I" },
    },
    {
      path: "/user-2",
      name: "User2",
      component: () => import("../views/User2.vue"),
      props: { name: "Ashley" },
    },
  ],
});

export default router;
