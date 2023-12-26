<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card-header bg-dark text-white text-center p-2 rounded">
        Editar <span v-text="nombre"></span>
      </div>
      <div class="card-body">
        <div class="d-grid col-6 mx-auto mt-3">
          <router-link :to="{ path: '/materias' }" class="btn btn-info">
            <i class="fa-solid fa-arrow-left mx-1"></i> Regresar a la lista
          </router-link>
        </div>
        <form v-on:submit="actualizar">
          <div class="input-group mb-2 mt-2">
            <span class="input-group-text"
              ><i class="fa-solid fa-user"></i
            ></span>
            <input
              type="text"
              v-model="nombre"
              id="nombre"
              placeholder="Ingrese nombre de la asignatura. "
              required
              maxlength="100"
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
              placeholder="Ingrese una descripción"
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
              placeholder="De cuantos creditos es la materia. "
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
              v-model="horas"
              id="horas"
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
              id="reaConocimiento"
              placeholder="Materia electiva/obligatoria."
              required
              maxlength="50"
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
import axios from "axios";

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
    actualizar() {
      event.preventDefault();

      this.cargando = true;
      if (this.nombre.trim() === "") {
        mostrarAlerta("Ingresa el nombre de la materia ", "warning", "nombre");
      } else if (this.descripcion.trim() === "") {
        mostrarAlerta("Ingresa una descripción. ", "warning", "descripcion");
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
          "PUT",
          parametros,
          this.url,
          "Materia " + this.nombre + " Actualizada!!!"
        );
      }
    },
  },
};
</script>
