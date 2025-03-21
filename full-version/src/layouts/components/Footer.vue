<script lang="ts" setup>
import logo from '@images/img-spiga/logo-white.png'
import icon1 from '@images/img-spiga/telefono.png'
import icon2 from '@images/img-spiga/sms.png'
import icon3 from '@images/img-spiga/Ubication.png'
import icon4 from '@images/img-spiga/facebook.png'
import icon5 from '@images/img-spiga/instagram.png'
import icon6 from '@images/img-spiga/youtube.png'
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="left-section">
        <div class="brand">
          <img
            :src="logo"
            alt="Spiga Logo"
            class="logo"
          >
          <p>Desarrollado por Spiga</p>
          <p>© Copyright 2025</p>
        </div>
      </div>
      <div class="right-section">
        <div class="contact">
          <h4>Contacto</h4>
          <div class="icons">
            <img
              :src="icon1"
              alt="Icon 1"
              class="icon"
            >
            <img
              :src="icon2"
              alt="Icon 1"
              class="icon"
            >
          </div>
        </div>

        <div class="location">
          <h4>Ubicación</h4>
          <div class="icons">
            <img
              :src="icon3"
              alt="Icon 1"
              class="icon"
            >
          </div>
          <!-- Contenedor para "Síguenos" y los iconos -->
          <div class="social">
            <p class="mt-5">
              Siguenos
            </p>
            <div class="social-icons">
              <img
                :src="icon4"
                alt="Facebook"
                class="social-icon"
              >
              <img
                :src="icon5"
                alt="Instagram"
                class="social-icon"
              >
              <img
                :src="icon6"
                alt="YouTube"
                class="social-icon"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap');

.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.footer-content {
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.left-section {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 5%;
}
h4 {
  position: relative;
  display: inline-block;
  color: white;
  font-family: 'Exo', sans-serif;
  font-size: 26px;
  padding-bottom: 2px; /* Espacio entre el texto y la línea */
}

.right-section {
  display: flex;
  gap: 40px;
  padding: 35px 118%;
}

.brand {
  text-align: left;
}

.logo {
  width: 140px;
  height: auto;
}
/* .con-loc {
  display: flex;
  justify-content: flex-end;
  width: 50%;
} */

.contact, .location {
  text-align: left;
}

h4 {
  position: relative;
  display: inline-block;
  color: white;
  font-family: 'Exo', sans-serif;
  font-size: 26px;
  padding-bottom: 2px; /* Espacio entre el texto y la línea */
}

h4::after {
  content: "";
  display: block;
  width: 120%; /* Ajusta este valor según la longitud deseada */
  height: 1px; /* Grosor de la línea */
  background-color: #ff7300;
  position: absolute;
  left: -10%; /* Centra la línea extendida */
  bottom: -3px;
}
.bold-text {
  font-weight: 700; /* Exo Bold */
}
/* .v-container {
  margin-left: auto !important; 
} */

.icons {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  gap: 10px;
  padding: 10px;
  /* align-items:start; */
}
.icon {
  width: 40px;
  height: auto;
}

.social {
  display: flex;
  align-items: center;
  gap: 10px; /* Espacio entre "Síguenos" y los iconos */
}

.social-icons {
  display: flex;
  gap: 10px; /* Espacio entre los iconos */
}

.social-icon {
  width: 24px; /* Ajusta el tamaño de los iconos */
  height: auto;
}
/* .containers{
  justify-content: flex-end;
} */
</style>
