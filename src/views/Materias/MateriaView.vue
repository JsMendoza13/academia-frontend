<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card-header bg-dark text-white text-center p-2 rounded">
        Descripción de <span v-text="nombre"></span>
      </div>
      <div class="card-body">
        <div class="d-grid col-6 mx-auto mt-3">
          <router-link :to="{ path: '/materias' }" class="btn btn-info">
            <i class="fa-solid fa-arrow-left mx-1"></i> Regresar a la lista
          </router-link>
        </div>

        <div class="input-group mt-3">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="nombre" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="descripcion" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="credito" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="horas" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="areaConocimiento" class="form-control"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  data() {
    return {
      id: 0,
      nombre: "",
      descripcion: "",
      credito: "",
      horas: "",
      areaConocimiento: "",
      cargando: true,
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url = "http://projectacademia.test/api/v1/materias/" + this.id;

    this.getMaterias();
  },
  methods: {
    getMaterias() {
      axios.get(this.url).then((res) => {
        this.nombre = res.data.data.nombre;
        this.descripcion = res.data.data.descripcion;
        this.credito = res.data.data.credito;
        this.horas = res.data.data.horas;
        this.areaConocimiento = res.data.data.areaConocimiento;
      });
    },
  },
};
</script>
