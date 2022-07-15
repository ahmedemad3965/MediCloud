import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/",
    name: "about",
    component: () => import("../views/AboutView.vue"), // todo : by 14 jul
  },
  {
    path: "/patients/auth",
    name: "patients-auth",
    component: () => import("../views/PatientsAuthView.vue"),
  },
  {
    path: "/doctors/auth",
    name: "doctors-auth",
    component: () => import("../views/DoctorsAuthView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
