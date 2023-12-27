import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
/*Route Estudiantes*/
import EstudianteEdit from "../views/Estudiantes/EstudianteEdit.vue";
import EstudianteNuevo from "../views/Estudiantes/EstudianteNuevo.vue";
import EstudianteView from "../views/Estudiantes/EstudianteView.vue";
import Estudiantes from "../views/Estudiantes/Estudiantes.vue";
/*Route Maestros*/
import Maestros from "../views/Maestros/Maestros.vue";
import MaestroEdit from "../views/Maestros/MaestroEdit.vue";
import MaestroNew from "../views/Maestros/MaestroNew.vue";
import MaestroView from "../views/Maestros/MaestroView.vue";
/*Route Materias*/
import Materias from "../views/Materias/Materias.vue";
import MateriaView from "../views/Materias/MateriaView.vue";
import MateriaEdit from "../views/Materias/MateriaEdit.vue";
import MateriaNew from "../views/Materias/MateriaNew.vue";
/*Reporte*/
import ReporteView from "../views/ReporteView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/estudiantes",
    name: "estudiantes",
    component: Estudiantes,
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
  {
    path: "/maestros",
    name: "maestros",
    component: Maestros,
  },
  {
    path: "/editMaestro/:id",
    name: "editarMaestro",
    component: MaestroEdit,
  },
  {
    path: "/createMaestro",
    name: "createMaestro",
    component: MaestroNew,
  },
  {
    path: "/viewMaestro/:id",
    name: "viewMaestro",
    component: MaestroView,
  },
  {
    path: "/materias",
    name: "materias",
    component: Materias,
  },
  {
    path: "/createMate",
    name: "crearMate",
    component: MateriaNew,
  },
  {
    path: "/editMate/:id",
    name: "editarMate",
    component: MateriaEdit,
  },
  {
    path: "/viewMate/:id",
    name: "viewMate",
    component: MateriaView,
  },
  {
    path: "/reporte",
    name: "reporte",
    component: ReporteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
