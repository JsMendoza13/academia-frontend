import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EstudianteEdit from "../views/Estudiantes/EstudianteEdit.vue";
import EstudianteNuevo from "../views/Estudiantes/EstudianteNuevo.vue";
import EstudianteView from "../views/Estudiantes/EstudianteView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/editE/:id",
    name: "editarE",
    component: EstudianteEdit,
  },
  {
    path: "/createE",
    name: "create",
    component: EstudianteNuevo,
  },
  {
    path: "/viewE/:id",
    name: "viewE",
    component: EstudianteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
