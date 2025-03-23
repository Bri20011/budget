<script setup>
import { ref } from 'vue'
import img1 from '@/assets/img/spiga/1JULIETA/oficina/1.jpg'
import img3 from '@/assets/img/spiga/3NEVADO/1STUDIO/1.jpg'
import img4 from '@/assets/img/spiga/lineas-varios/1.jpg'
import icons1 from '@/assets/img/spiga/iconos/otro.png'
import icons2 from '@/assets/img/spiga/iconos/igual-cubierta.png'

const colors = ref([
  { name: 'Monarca', hex: '#B98C8C' },
  { name: 'Expreso', hex: '#C9BF9C' },
  { name: 'Chocolate', hex: '#8e2d03' },
])

const selectedColor = ref(null)
const images = ref([img3, img4]) // Solo dos imágenes pequeñas
const selectedImage = ref(img1)

const selectImage = img => {
  selectedImage.value = img
}
</script>

<template>
  <VCardItem class="nav-container">
    <h1 class="text-h5 font-weight-bold mb-4">
      Julieta Studio
    </h1>

    <VRow>
      <!-- Imagen principal -->
      <VCol
        cols="12"
        md="6"
      >
        <VImg
          :src="selectedImage"
          height="400px"
          contain
          class="rounded-lg"
        />

        <!-- Miniaturas (solo 2) -->
        <VRow class="mt-3">
          <VCol
            v-for="(img, index) in images"
            :key="index"
            cols="6"
          >
            <VImg
              :src="img"
              height="80px"
              contain
              class="rounded-lg cursor-pointer"
              @click="selectImage(img)"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- Detalles del producto -->
      <VCol
        cols="12"
        md="6"
      >
        <p class="text-body-1 mb-1">
          <strong>Materiales:</strong>
        </p>
        <p class="text-body-2 text-grey-darken-1">
          Estructura perimetral de aluminio con patas en acero inoxidable.
        </p>

        <p class="text-body-1 mb-1">
          <strong>Medidas de cubierta:</strong>
        </p>
        <p class="text-body-2 text-grey-darken-1">
          2.00 x 1.00 mts.
        </p>

        <p class="text-body-1 mb-1">
          <strong>Tipo de Regatón:</strong>
        </p>
        <p class="text-body-2 text-grey-darken-1">
          Perno de acero, deslizador de plástico.
        </p>

        <!-- Precio -->
        <p class="text-h5 font-weight-bold text-orange-darken-2 mt-4">
          $1,700.85
        </p>

        <!-- Opciones de selección -->
        <div class="d-flex align-start flex-column">
          <p class="text-h6 font-weight-bold text-grey-darken-3">
            Cubierta:
          </p>

          <VRow class="justify-center">
            <VCol
              v-for="color in colors"
              :key="color.name"
              cols="4"
              class="text-center"
            >
              <VBtn
                :style="{ backgroundColor: color.hex }"
                class="color-box"
                elevation="2"
                @click="selectedColor = color.name"
              />
              <p class="text-caption text-grey-darken-2 mt-1">
                {{ color.name }}
              </p>
            </VCol>
          </VRow>
        </div>
        <VSelect
          clearable
          :items="['1', '2', '3', '4', '5', '6']"
          variant="solo-filled"
          outlined
          color="deep-purple darken-3"
          style="border-radius: 100px;"
        />
        <h4 class="mt-2">
          Cuerpos:
        </h4>
        <VSelect
          clearable
          :items="['Metal', 'Madera']"
          variant="solo-filled"
          outlined
          color="deep-purple darken-3"
          style="border-radius: 100px;"
        />
        <h4 class="mt-2">
          Colores:
        </h4>
        <!-- Botones de acción -->
        <VBtn
          color="yellow-darken-2"
          class="mt-3"
          block
        >
          Personalizar Escritorio
        </VBtn>
        <VBtn
          color="orange-darken-2"
          class="mt-3"
          block
        >
          Agregar cotización
        </VBtn>
      </VCol>
    </VRow>
  </VCardItem>
</template>

<style scoped>
.nav-container {
  background-color: white;
  width: 100%;
}
.cursor-pointer {
  cursor: pointer;
}
.color-box {
  width: 20px;
  height: 40px;
  border-radius: 12px;
  min-width: auto; /* Evita que Vuetify haga el botón demasiado ancho */
}
</style>
