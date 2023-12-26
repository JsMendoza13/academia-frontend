<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card-header bg-dark text-white text-center">
        Registrar estudiante
      </div>
      <div class="card-body">
        <form v-on:submit="registrar">
          <div class="d-grid col-6 mx-auto mt-3">
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="text"
                v-model="id"
                id="id"
                placeholder="Ingrese su identificacion. "
                required
                maxlength="10"
                class="form-control"
              />
            </div>
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="text"
                v-model="nombres"
                id="nombres"
                placeholder="Ingrese sus nombres. "
                required
                maxlength="50"
                class="form-control"
              />
            </div>
          </div>
          <div class="d-grid col-6 mx-auto mt-1">
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="text"
                v-model="apellidos"
                id="nombres"
                placeholder="Ingrese sus apellidos. "
                required
                maxlength="50"
                class="form-control"
              />
            </div>
          </div>
          <div class="d-grid col-6 mx-auto mt-1">
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="text"
                v-model="telefono"
                id="nombres"
                placeholder="Ingrese su telefono. "
                required
                maxlength="15"
                class="form-control"
              />
            </div>
          </div>
          <div class="d-grid col-6 mx-auto mt-1">
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="text"
                v-model="direccion"
                id="nombres"
                placeholder="Ingrese su direccion."
                required
                maxlength="20"
                class="form-control"
              />
            </div>
          </div>
          <div class="d-grid col-6 mx-auto mt-1">
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="text"
                v-model="ciudad"
                id="nombres"
                placeholder="Ingrese su ciudad."
                required
                maxlength="20"
                class="form-control"
              />
            </div>
          </div>
          <div class="d-grid col-6 mx-auto mt-1">
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="text"
                v-model="semestre"
                id="nombres"
                placeholder="Ingrese el semestre."
                required
                maxlength="10"
                class="form-control"
              />
            </div>
          </div>
          <div class="d-grid col-6 mx-auto mt-1">
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="text"
                v-model="credito"
                id="nombres"
                placeholder="Ingrese sus creditos."
                required
                maxlength="3"
                class="form-control"
              />
            </div>
          </div>
          <div class="d-grid col-6 mx-auto mt-1">
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="fa-solid fa-user"></i
              ></span>
              <input
                type="text"
                v-model="nota"
                id="nombres"
                placeholder="Ingrese su nota. "
                required
                maxlength="5"
                class="form-control"
              />
            </div>
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
      id: "",
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

  methods: {
    registrar() {
      event.preventDefault();

      this.cargando = true;
      if (this.id.trim() === "") {
        mostrarAlerta("Ingrese su identificacion. ", "warning", "id");
      } else if (this.nombres.trim() === "") {
        mostrarAlerta("Ingresa tus nombres ", "warning", "nombres");
      } else if (this.apellidos.trim() === "") {
        mostrarAlerta("Ingresa tus apellidos. ", "warning", "apellidos");
      } else if (this.telefono.trim() === "") {
        mostrarAlerta("Ingresa un telefono. ", "warning", "telefono");
      } else if (this.credito.trim() < 7 || "") {
        mostrarAlerta(
          "Debes ingresar tu creditos, No pueden ser menor a 7. ",
          "warning",
          "credito"
        );
      } else {
        var parametros = {
          id: this.id.trim(),
          nombres: this.nombres.trim(),
          apellidos: this.apellidos.trim(),
          telefono: this.telefono.trim(),
          direccion: this.direccion.trim(),
          ciudad: this.ciudad.trim(),
          semestre: this.semestre.trim(),
          credito: this.credito.trim(),
          nota: this.nota.trim(),
        };
        enviarSolicitud(
          "POST",
          parametros,
          "http://projectacademia.test/api/v1/estudiantes",
          "Estudiante registrado!!! "
        );
      }
    },
  },
};
</script>
