import { createRouter, createWebHistory } from "vue-router";
// import Login from "@/views/dashboard/Login.vue";

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory("/"),
  routes: [
  //   {
  //     path: "/",
  //     name: "login",
  //     component: Login,
  //  },
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/layouts/full/FullLayout.vue"),
      children: [
        {
          name: "Dashboard",
          path: "/dashboard",
          component: () =>
            import("@/views/dashboard/Dashboard.vue"),
        },
        {
          name: "My Journals",
          path: "ui-components/alert",
          component: () =>
            import("@/views/ui-components/Alerts.vue"),
        },
        {
          name: "History",
          path: "ui-components/buttons",
          component: () =>
            import("@/views/ui-components/Buttons.vue"),
        },
        // {
        //   name: "Cards",
        //   path: "ui-components/cards",
        //   component: () =>
        //     import("@/views/ui-components/Cards.vue"),
        // },
        // {
        //   name: "Menus",
        //   path: "ui-components/menus",
        //   component: () =>
        //     import("@/views/ui-components/Menus.vue"),
        // },
        // {
        //   name: "Tables",
        //   path: "ui-components/tables",
        //   component: () =>
        //     import("@/views/ui-components/Tables.vue"),
        // },
      ],
    },
  ],
});

export default router;
