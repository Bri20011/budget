<script setup lang="ts">
import img1 from '@/assets/img/spiga/1JULIETA/oficina/1.jpg'
import img3 from '@/assets/img/spiga/3NEVADO/1STUDIO/1.jpg'
import img4 from '@/assets/img/spiga/lineas-varios/1.jpg'

const productos: any = ref([])
const titulo = ref('')
const descripcion = ref('')

const catalogos = {
  '/catalogo/spiga': {
    titulo: 'Spiga',
    descripcion: 'Hecha un viztazo más de cerca a nuestras lineas',
    catalogo: [
      {
        nombre: 'Julieta',
        img: img1,
        linea: 'Julieta',
      },
      {
        nombre: 'Anna',
        img: img3,
        linea: 'Spiga',
      },
      {
        nombre: 'Nevado',
        img: img4,
        linea: 'Spiga',
      },
      {
        nombre: 'Descanso',
        img: img1,
        linea: 'Spiga',
      },
      {
        nombre: 'Nube',
        img: img1,
        linea: 'Spiga',
      },
      {
        nombre: 'Spring',
        img: img3,
        linea: 'Spiga',
      },
      {
        nombre: 'Mink',
        img: img4,
        linea: 'Spiga',
      },
      {
        nombre: 'Snowball',
        img: img1,
        linea: 'Spiga',
      },
      {
        nombre: 'Blue',
        img: img1,
        linea: 'Spiga',
      },
      {
        nombre: 'Opi',
        img: img3,
        linea: 'Spiga',
      },
      {
        nombre: 'Teller',
        img: img4,
        linea: 'Spiga',
      },
      {
        nombre: 'Black wolf',
        img: img1,
        linea: 'Spiga',
      },
    ],
  },
  '/catalogo/tamarindo': {
    titulo: 'Tamarindo',
    descripcion: 'Hecha un viztazo más de cerca a nuestras sillas',
    catalogo: [
      {
        nombre: 'Dirección',
        img: img3,
        linea: 'Direccion',
      },
      {
        nombre: 'Elemento',
        img: img3,
        linea: 'Tamarindo',
      },
      {
        nombre: 'Operativas',
        img: img3,
        linea: 'Tamarindo',
      },
      {
        nombre: 'Gamer',
        img: img3,
        linea: 'Tamarindo',
      },
    ],
  },
  '/catalogo/blue-room': {
    titulo: 'Blue Room',
    descripcion: 'Hecha un viztazo más de cerca a nuestras sillas',
    catalogo: [
      {
        nombre: 'Empresarial',
        img: img3,
        linea: 'Blue',
      },
      {
        nombre: 'Ejecutiva',
        img: img4,
        linea: 'Blue',
      },
      {
        nombre: 'Operativas',
        img: img3,
        linea: 'Blue',
      },
      {
        nombre: 'General',
        img: img4,
        linea: 'Blue',
      },
    ],
  },
  '/catalogo/ashley': {
    titulo: 'Ashley Furniture',
    descripcion: 'Hecha un viztazo más de cerca a nuestras sillas',
    catalogo: [{
      nombre: 'Direccion',
      img: img1,
      linea: 'Ashley',
    },
    {
      nombre: 'Operativa',
      img: img3,
      linea: 'Operativa',
    },
    {
      nombre: 'Alpha',
      img: img4,
      linea: 'Alpha',
    },
    {
      nombre: 'Operativa',
      img: img3,
      linea: 'Operativa',
    }],
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
          :to="`${route.path}/linea/${prod.linea}`"
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
