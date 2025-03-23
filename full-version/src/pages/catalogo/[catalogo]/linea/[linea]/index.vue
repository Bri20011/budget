<script setup lang="ts">
import img1 from '@/assets/img/spiga/1JULIETA/oficina/1.jpg'
import img3 from '@/assets/img/spiga/3NEVADO/1STUDIO/1.jpg'
import img4 from '@/assets/img/spiga/lineas-varios/1.jpg'

const productos: any = ref([])
const titulo = ref('')
const descripcion = ref('')

const catalogos = {
  '/catalogo/ashley/linea/Ashley': {
    titulo: 'Ashley Furniture',
    descripcion: 'Linea: Dirección',
    catalogo: [{
      nombre: 'Direccion 1',
      img: img1,
      producto: 'julieta-studio',
    },
    {
      nombre: 'Direccion 2',
      img: img3,
      producto: 'julite-mesa-consejo',
    },
    {
      nombre: 'Direccion 3',
      img: img3,
      producto: 'julite-mesa-consejo',
    },
    {
      nombre: 'Direccion 4',
      img: img3,
      producto: 'julite-mesa-consejo',
    },
    {
      nombre: 'Direccion 5',
      img: img3,
      producto: 'julite-mesa-consejo',
    },
    {
      nombre: 'Direccion 6',
      img: img3,
      producto: 'julite-mesa-consejo',
    },
    {
      nombre: 'Direccion 7',
      img: img3,
      producto: 'julite-mesa-consejo',
    },
    {
      nombre: 'Direccion 8',
      img: img3,
      producto: 'julite-mesa-consejo',
    },
    {
      nombre: 'Direccion 9',
      img: img3,
      producto: 'julite-mesa-consejo',
    },
    {
      nombre: 'Direccion 10',
      img: img3,
      producto: 'julite-mesa-consejo',
    },
    {
      nombre: 'Direccion 11',
      img: img3,
      producto: 'julite-mesa-consejo',
    },
    {
      nombre: 'Direccion 12',
      img: img4,
      producto: 'julieta-escritorio-oficina',
    }],
  },
  '/catalogo/spiga/linea/Julieta': {
    descripcion: 'Linea: Julieta',
    catalogo: [
      {
        nombre: 'Julieta',
        img: img1,
        producto: 'Julieta-studio',
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
    ],
  },
  '/catalogo/blue-room/linea/Blue': {
    titulo: 'Blue Room',
    descripcion: 'Linea: Blue Room',
    catalogo: [
      {
        nombre: 'Empresarial',
        img: img3,
        producto: 'Empresarial',
      },
      {
        nombre: 'Empresarial Alpha',
        img: img4,
        producto: 'Ejecutiva',
      },
      {
        nombre: 'Empresarial White Respaldo Bajo',
        img: img1,
        producto: 'Operativas',
      },
      {
        nombre: 'Empresarial Red Respaldo Alto',
        img: img3,
        producto: 'Empresarial',
      },
      {
        nombre: 'Empresarial Dream',
        img: img4,
      },
      {
        nombre: 'Empresarial Omega',
        img: img4,
      },
      {
        nombre: 'Empresarial Infinite Rest',
        img: img4,
      },
      {
        nombre: 'Empresarial Boss Black',
        img: img4,
      },
    ],
  },
  '/catalogo/tamarindo/linea/Direccion': {
    titulo: 'Tamarindo',
    descripcion: 'Linea: Dirección',
    catalogo: [
      {
        nombre: 'Infinite',
        img: img3,
        producto: 'Empresarial',
      },
      {
        nombre: 'Energy Black Respaldo Alto',
        img: img4,
        producto: 'Ejecutiva',
      },
      {
        nombre: 'Energy Black Respaldo Bajo',
        img: img1,
        producto: 'Operativas',
      },
      {
        nombre: 'Express Black',
        img: img4,
      },
      {
        nombre: 'Spirit Express Black Respaldo Alto',
        img: img4,
      },
      {
        nombre: 'Spirit White Respaldo Alto',
        img: img4,
      },
      {
        nombre: 'Empresarial Boss Black',
        img: img4,
      },
      {
        nombre: 'Legend Respaldo Alto',
        img: img4,
      },
      {
        nombre: 'Dream Vista',
        img: img4,
      },
      {
        nombre: 'Omega Respaldo Alto',
        img: img4,
      },
      {
        nombre: 'Infinite Rest',
        img: img4,
      },
      {
        nombre: 'Boss Black',
        img: img4,
      },
    ],
  },
}

const route = useRoute()

function cargarDatos() {
  productos.value = (catalogos as any)[route.path].catalogo
  titulo.value = (catalogos as any)[route.path].titulo
  descripcion.value = (catalogos as any)[route.path].descripcion
}

onMounted(() => {
  cargarDatos()
})
onBeforeUpdate(() => {
  cargarDatos()
})
</script>

<template>
  <VCardItem class="nav-container">
    <VCardTitle class="font-weight-bold d-flex justify-center">
      {{ titulo }}
    </VCardTitle>
    <VCardText class="subtitle-text d-flex justify-center">
      {{ descripcion }}
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
          :to="`${route.path}/producto/${prod.producto}`"
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
