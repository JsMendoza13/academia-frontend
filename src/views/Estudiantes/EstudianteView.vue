<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card-header bg-dark text-white text-center">
        Detalle del estudiante
      </div>
      <div class="card-body">
        <div class="d-grid col-6 mx-auto mt-3">
          <router-link :to="{ path: '/' }" class="btn btn-info">
            <i class="fa-solid fa-arrow-left mx-1"></i> Regresar a la lista
          </router-link>
        </div>
        <div class="input-group mt-3">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="id" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="nombres" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="apellidos" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="telefono" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="direccion" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="ciudad" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="semestre" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="credito" class="form-control"></label>
        </div>
        <div class="input-group mt-1">
          <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
          <label v-text="nota" class="form-control"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from "../../funciones";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  data() {
    return {
      id: 0,
      nombres: "",
      apellidos: "",
      telefono: "",
      direccion: "",
      ciudad: "",
      semestre: "",
      credito: "",
      nota: "",
      cargando: true,
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url = "http://projectacademia.test/api/v1/estudiantes/" + this.id;

    this.getEstudiante();
  },
  methods: {
    getEstudiante() {
      axios.get(this.url).then((res) => {
        this.id = res.data.data.id;
        this.nombres = res.data.data.nombres;
        this.apellidos = res.data.data.apellidos;
        this.telefono = res.data.data.telefono;
        this.direccion = res.data.data.direccion;
        this.ciudad = res.data.data.ciudad;
        this.semestre = res.data.data.semestre;
        this.credito = res.data.data.credito;
        this.nota = res.data.data.nota;
      });
    },
    actualizar() {
      event.preventDefault();

      this.cargando = true;
      if (this.id === "") {
        mostrarAlerta("Ingrese su identificacion. ", "warning", "id");
      } else if (this.nombres.trim() === "") {
        mostrarAlerta("Ingresa tus nombres ", "warning", "nombres");
      } else if (this.apellidos.trim() === "") {
        mostrarAlerta("Ingresa tus apellidos. ", "warning", "apellidos");
      } else if (this.telefono.trim() === "") {
        mostrarAlerta("Ingresa un telefono. ", "warning", "telefono");
      } else if (this.credito < 7 || "") {
        mostrarAlerta(
          "Debes ingresar tu creditos, No pueden ser menor a 7. ",
          "warning",
          "credito"
        );
      } else {
        var parametros = {
          id: this.id,
          nombres: this.nombres.trim(),
          apellidos: this.apellidos.trim(),
          telefono: this.telefono.trim(),
          direccion: this.direccion.trim(),
          ciudad: this.ciudad.trim(),
          semestre: this.semestre,
          credito: this.credito,
          nota: this.nota,
        };
        enviarSolicitud(
          "PUT",
          parametros,
          this.url,
          "Estudiante Actualizado!!! "
        );
      }
    },
  },
};
</script>
