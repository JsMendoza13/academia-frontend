<template>
  <div class="row">
    <div class="mt-3 col-lg-8 offset-lg-2">
      <div class="card-header bg-dark text-white text-center rounded mb-2 p-2">
        Reporte de Materias
      </div>
      <div class="table-reponsive">
        <DataTable
          :data="materias"
          :columns="columns"
          class="table table-striped table-bordered display rounded"
          :options="{
            responsive: true,
            autowidth: false,
            dom: 'Bfrtip',
            language: {
              search: 'Buscar',
              zeroRecords: 'No hay registros para mostrar',
              info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
              infoFiltered: '(Filtrados de _MAX_ registros.)',
              paginate: {
                first: 'Primero',
                previous: 'Anterior',
                Next: 'Siguiente',
                Last: 'Ultimo',
              },
            },
            buttons: botones,
          }"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Crédito</th>
              <th>Horas</th>
              <th>Area de Conocimiento</th>
              <th>Electiva / Obligatoria</th>
            </tr>
          </thead>
        </DataTable>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTableLib from "datatables.net-bs5";
import Buttons from "datatables.net-buttons-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import print from "datatables.net-buttons/js/buttons.print";
import pdfmake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "datatables.net-responsive-bs5";
import JsZip from "jszip";
pdfmake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);

export default {
  components: { DataTable },
  data() {
    return {
      materias: null,
      columns: [
        {
          data: null,
          render: function (data, type, row, meta) {
            return `${meta.row + 1}`;
          },
        },
        { data: "nombre" },
        { data: "descripcion" },
        { data: "credito" },
        { data: "horas" },
        { data: "areaConocimiento" },
        { data: "electiva" },
      ],
      botones: [
        {
          title: "Reporte de materias",
          extend: "excelHtml5",
          text: '<i class="fa-solid fa-file-excel"></i> Excel',
          className: "btn btn-success",
        },
        {
          title: "Reporte de materias",
          extend: "pdfHtml5",
          text: '<i class="fa-solid fa-file-pdf"></i> PDF',
          className: "btn btn-danger",
        },
        {
          title: "Reporte de materias",
          extend: "print",
          text: '<i class="fa-solid fa-print"></i> Imprimir',
          className: "btn btn-dark",
        },
        {
          title: "Reporte de materias",
          extend: "copy",
          text: '<i class="fa-solid fa-copy"></i> Copiar texto',
          className: "btn btn-light",
        },
      ],
    };
  },
  mounted() {
    this.getMaterias();
  },
  methods: {
    getMaterias() {
      axios
        .get("http://projectacademia.test/api/v1/materias")
        .then((response) => (this.materias = response.data));
    },
  },
};
</script>
<style>
@import "datatables.net-bs5";
</style>
