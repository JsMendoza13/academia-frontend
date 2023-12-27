<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Estudiantes
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/estudiantes">
                  Ver estudiantes
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/createE">
                  Registrar Nuevo
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/reporteEstudiante">
                  Reporte
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Maestros
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/maestros">
                  Ver Maestros
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/createMaestro">
                  Registrar Nuevo
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/reporteMaestro">
                  Reporte
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Materias
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/materias">
                  Ver Materias
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/createMate">
                  Registrar Nueva
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/reporteMate">
                  Reporte
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view />
  </div>
</template>
