<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card-header bg-dark text-white text-center p-2 rounded">
        Registrar nueva materia
      </div>
      <div class="card-body">
        <div class="d-grid col-6 mx-auto mt-3">
          <router-link :to="{ path: '/materias' }" class="btn btn-info">
            <i class="fa-solid fa-arrow-left mx-1"></i> Regresar a la lista
          </router-link>
        </div>
        <form v-on:submit="registrar">
          <div class="input-group mb-2 mt-3">
            <span class="input-group-text"
              ><i class="fa-solid fa-user"></i
            ></span>
            <input
              type="text"
              v-model="nombre"
              id="nombre"
              placeholder="Ingrese el nombre. "
              required
              maxlength="50"
              class="form-control"
            />
          </div>

          <div class="input-group mb-2">
            <span class="input-group-text"
              ><i class="fa-solid fa-user"></i
            ></span>
            <input
              type="text"
              v-model="descripcion"
              id="descripcion"
              placeholder="Ingrese una descripcion. "
              required
              maxlength="255"
              class="form-control"
            />
          </div>

          <div class="input-group mb-2">
            <span class="input-group-text"
              ><i class="fa-solid fa-user"></i
            ></span>
            <input
              type="text"
              v-model="credito"
              id="credito"
              placeholder="Ingrese los creditos de la materia. "
              required
              maxlength="15"
              class="form-control"
            />
          </div>

          <div class="input-group mb-2">
            <span class="input-group-text"
              ><i class="fa-solid fa-user"></i
            ></span>
            <input
              type="horas"
              v-model="horas"
              id="nombres"
              placeholder="Ingrese las horas. "
              required
              maxlength="15"
              class="form-control"
            />
          </div>

          <div class="input-group mb-2">
            <span class="input-group-text"
              ><i class="fa-solid fa-user"></i
            ></span>
            <input
              type="text"
              v-model="areaConocimiento"
              id="areaConocimiento"
              placeholder="Ingrese obligatoria / electiva."
              required
              maxlength="150"
              class="form-control"
            />
          </div>

          <div class="d-grid col-6 mx-auto mt-2">
            <button class="btn btn-success">
              <i class="fa-solid fa-floppy-disk"></i>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from "../../funciones";

export default {
  data() {
    return {
      nombre: "",
      descripcion: "",
      credito: "",
      horas: "",
      areaConocimiento: "",
      cargando: true,
    };
  },

  methods: {
    registrar() {
      event.preventDefault();

      this.cargando = true;
      if (this.nombre.trim() === "") {
        mostrarAlerta("Ingresa el nombre de la materia ", "warning", "nombre");
      } else if (this.descripcion.trim() === "") {
        mostrarAlerta("Ingresa una descripcion. ", "warning", "descripcion");
      } else if (this.credito === "") {
        mostrarAlerta("Ingresa los creditos. ", "warning", "credito");
      } else if (this.credito < 7 || "") {
        mostrarAlerta(
          "Debes ingresar los creditos, No pueden ser menor a 7. ",
          "warning",
          "credito"
        );
      } else if (this.horas === "") {
        mostrarAlerta("Ingresa las horas. ", "warning", "horas");
      } else if (this.areaConocimiento.trim() === "") {
        mostrarAlerta(
          "Ingresa electiva / obligatoria. ",
          "warning",
          "areaConocimiento"
        );
      } else {
        var parametros = {
          nombre: this.nombre.trim(),
          descripcion: this.descripcion.trim(),
          credito: this.credito,
          horas: this.horas,
          areaConocimiento: this.areaConocimiento.trim(),
        };
        enviarSolicitud(
          "POST",
          parametros,
          "http://projectacademia.test/api/v1/materias",
          "La materia  " + this.nombre + " fue registrada!!! "
        );
      }
    },
  },
};
</script>
