<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="card-header bg-dark text-white text-center rounded">
        Lista de Maestros
      </div>
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Crédito</th>
              <th>Horas</th>
              <th>Área de Conocimiento</th>
              <th>Fecha Ingreso</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="9"><span>Cargando...</span></td>
            </tr>
            <tr v-else v-for="(est, i) in this.materias" :key="est.id">
              <td v-text="i + 1"></td>
              <td v-text="est.nombre"></td>
              <td v-text="est.descripcion"></td>
              <td v-text="est.credito"></td>
              <td v-text="est.horas"></td>
              <td v-text="est.areaConocimiento"></td>
              <td
                v-text="new Date(est.updated_at).toLocaleDateString('en-US')"
              ></td>
              <td>
                <router-link
                  :to="{ path: '/viewMate/' + est.id }"
                  class="btn btn-info"
                >
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link
                  :to="{ path: 'editMate/' + est.id }"
                  class="btn btn-warning"
                >
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button
                  class="btn btn-danger"
                  v-on:click="($event) => eliminar(est.id, est.nombre)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { confirmar } from "../../funciones";

export default {
  data() {
    return {
      materias: null,
      cargando: true,
    };
  },
  mounted() {
    this.getMaterias();
  },
  methods: {
    getMaterias() {
      this.cargando = true;
      axios.get("http://projectacademia.test/api/v1/materias").then((res) => {
        this.materias = res.data;
        this.cargando = false;
      });
    },
    eliminar(id, nombre) {
      confirmar(
        "http://projectacademia.test/api/v1/materias/",
        id,
        "Eliminar registro",
        "Realmente desea eliminar " + nombre + " ?"
      );
      this.cargando = false;
    },
  },
};
</script>
