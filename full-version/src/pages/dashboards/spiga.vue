<script setup lang="ts">
import img1 from './img/spiga/1JULIETA/oficina/1.jpg'
import img3 from './img/spiga/3NEVADO/1STUDIO/1.jpg'
import img4 from './img/spiga/lineas-varios/1.jpg'

const productos = [
  {
    nombre: 'Julieta',
    img: img1,
  },
  {
    nombre: 'Anna',
    img: img3,
  },
  {
    nombre: 'Nevado',
    img: img4,
  },
  {
    nombre: 'Julieta',
    img: img1,
  },
  {
    nombre: 'Anna',
    img: img3,
  },
  {
    nombre: 'Nevado',
    img: img4,
  },
  {
    nombre: 'Julieta',
    img: img1,
  },
  {
    nombre: 'Anna',
    img: img3,
  },
  {
    nombre: 'Nevado',
    img: img4,
  },
]
</script>

<template>
  <VCardItem class="nav-container">
    <VCardTitle class="font-weight-bold d-flex justify-center">
      Spiga
    </VCardTitle>
    <VCardText class="subtitle-text d-flex justify-center">
      Hecha un vistazo más de cerca a nuestras líneas
    </VCardText>

    <VRow
      justify="center"
      gap="10"
    >
      <VCol
        v-for="(prod, index) of productos"
        :key="index"
        cols="12"
        sm="3"
        md="3"
      >
        <VCard
          elevation="0"
          class="image-card"
        >
          <VImg
            :src="prod.img"
            cover
            class="custom-img"
          />
          <VCardText class="card-text d-flex justify-center text-bold">
            {{ prod.nombre }}
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VCardItem>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;700&display=swap');

.nav-container {
  background-color: white;
  width: 100%;
}
/* Título Spiga */
.title-text {
  font-family: 'Exo', sans-serif;
  font-weight: 800; /* Bold */
  font-size: 26px;
  text-align: center;
  font-weight: bold; /* Negrita extra */
  text-transform: uppercase; /* Opcional: pone en mayúsculas */
}

/* Subtítulo */
.subtitle-text {
  font-family: 'Exo', sans-serif;
  font-weight: 300; /* Light */
  font-size: 16px;
  text-align: center;
}

/* Texto de tarjetas */
.card-text {
  font-family: 'Exo', sans-serif;
  font-weight: 400; /* Regular */
  font-size: 16px;
  text-align: center;
}

.image-card {
  border-radius: 0 !important;
  overflow: hidden;
}

.custom-img {
  width: 100%;
  height: 200px; /* Ajusta según tu necesidad */
  object-fit: cover;
  border-radius: 0 !important;
}
</style>
