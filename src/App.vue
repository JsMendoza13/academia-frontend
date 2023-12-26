<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">U-psicol</router-link>

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
            </ul>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view />
  </div>
</template>
