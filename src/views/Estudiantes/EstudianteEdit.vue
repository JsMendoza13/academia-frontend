<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card-header bg-dark text-white text-center p-2 rounded">
        Editar <span v-text="nombres + ' ' + apellidos"></span>
      </div>
      <div class="card-body">
        <div class="d-grid col-6 mx-auto mt-3">
          <router-link :to="{ path: '/estudiantes' }" class="btn btn-info">
            <i class="fa-solid fa-arrow-left mx-1"></i> Regresar a la lista
          </router-link>
        </div>
        <form v-on:submit="actualizar">
          <div class="input-group mb-2 mt-3">
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

          <div class="d-grid col-6 mx-auto mt-2">
            <button class="btn btn-warning">
              <i class="fa-solid fa-refresh"></i>
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mostrarAlerta, enviarSolicitud } from "../../funciones";
import { useRoute } from "vue-router";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  computed: {
    ...mapGetters(["apiUrl"]),
  },
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
    this.url = this.apiUrl + "/estudiantes/" + this.id;

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
          "Debes ingresar tus creditos, No pueden ser menor a 7. ",
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
