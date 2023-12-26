import Swal from "sweetalert2";
import axios from "axios";

export function mostrarAlerta(titulo, icono, foco = "") {
  if (foco && document.getElementById(foco)) {
    document.getElementById(foco).focus();
  }

  Swal.fire({
    title: titulo,
    icon: icono,
    customClass: { confirmButton: "btn btn-primary", popup: "animated zoonIn" },
    buttonsStyling: false,
  });
}

export function confirmar(urlSlash, id, titulo, mensaje) {
  var url = urlSlash + id;
  const SwalBoostrapButton = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success me-3",
      cancelButton: "btn btn-danger",
    },
  });

  SwalBoostrapButton.fire({
    title: titulo,
    text: mensaje,
    icon: "question",
    showCancelButton: true,
    confirmButton: '<i class="fa-solid fa-check"></i> Si, Eliminar.',
    cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar',
  }).then((res) => {
    if (res.isConfirmed) {
      enviarSolicitud("DELETE", { id: id }, url, "Eliminado con exito. ");
    } else {
      mostrarAlerta("Operacion cancelada", "info");
    }
  });
}

export function enviarSolicitud(metodo, parametros, url, mensaje) {
  axios({ method: metodo, url: url, data: parametros })
    .then(function (res) {
      var estado = res.status;
      if (estado == 200) {
        mostrarAlerta(mensaje, "success");
        window.setTimeout(function () {
          window.location.reload();
        }, 1000);
      } else {
        mostrarAlerta("Error al borrar. ", "error");
      }
    })
    .catch(function (error) {
      mostrarAlerta("Servidor no disponible. ", "error");
    });
}
