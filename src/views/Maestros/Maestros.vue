<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Ciudad</th>
              <th>Fecha Ingreso</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="9"><span>Cargando...</span></td>
            </tr>
            <tr v-else v-for="(est, i) in this.estudiantes" :key="est.id">
              <td v-text="i + 1"></td>
              <td v-text="est.id"></td>
              <td v-text="est.nombres"></td>
              <td v-text="est.apellidos"></td>
              <td v-text="est.email"></td>
              <td v-text="est.telefono"></td>
              <td v-text="est.direccion"></td>
              <td v-text="est.ciudad"></td>
              <td
                v-text="new Date(est.updated_at).toLocaleDateString('en-US')"
              ></td>
              <td>
                <router-link
                  :to="{ path: 'view/' + est.id }"
                  class="btn btn-info"
                >
                  <i class="fa-solid fa-eye"></i>
                </router-link>
                &nbsp;
                <router-link
                  :to="{ path: 'edit/' + est.id }"
                  class="btn btn-warning"
                >
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button
                  class="btn btn-danger"
                  v-on:click="($event) => eliminar(est.id, est.nombres)"
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
      estudiantes: null,
      cargando: true,
    };
  },
  mounted() {
    this.getEstudiantes();
  },
  methods: {
    getEstudiantes() {
      this.cargando = true;
      axios.get("http://projectacademia.test/api/v1/maestros").then((res) => {
        this.estudiantes = res.data;
        this.cargando = false;
      });
    },
    eliminar(id, nombres) {
      confirmar(
        "http://projectacademia.test/api/v1/maestros",
        id,
        "Eliminar registro",
        "Realmente desea eliminar a " + nombres + " ?"
      );
      this.cargando = false;
    },
  },
};
</script>
