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
const images = ref([img3, img4])
const selectedImage = ref(img1)

const selectImage = img => {
  selectedImage.value = img
}

const selectedBody = ref(null)
const quantity = ref(1)
const metalIcons = [icons1, icons1, icons1, icons1, icons1, icons1]
const maderaIcons = [icons2, icons2, icons2, icons2, icons2, icons2]

const showCustomizationForm = ref(false)
const formQuantity = ref(1)
const formSelectedBody = ref(null)
const formDescription = ref('')
const formAmount = ref('')

const openForm = () => {
  formQuantity.value = quantity.value
  formSelectedBody.value = selectedBody.value
  showCustomizationForm.value = true
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
          <strong class="font-weight-regular">Materiales:</strong>
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

        <!-- Selector de Cantidad -->
        <VSelect
          v-model="quantity"
          label="Cantidad"
          :items="[1, 2, 3, 4, 5]"
          variant="solo-filled"
          outlined
          color="deep-purple darken-3"
          style="border-radius: 100px;"
        />

        <!-- Selector de Cuerpos -->
        <h4 class="mt-4">
          Cuerpos:
        </h4>
        <VSelect
          v-model="selectedBody"
          label="Cuerpo"
          :items="['Metal', 'Madera']"
          variant="solo-filled"
          outlined
          color="deep-purple darken-3"
          style="border-radius: 100px;"
        />

        <!-- Mostrar iconos según el cuerpo seleccionado -->
        <VRow v-if="selectedBody">
          <VCol
            v-for="(icon, index) in selectedBody === 'Metal' ? metalIcons : maderaIcons"
            :key="index"
            cols="auto"
          >
            <VImg
              :src="icon"
              height="50"
              width="50"
              class="mr-2"
            />
          </VCol>
        </VRow>

        <!-- Botones de acción -->
        <div class="mt-4">
          <VBtn
            color="yellow darken-2"
            block
            class="custom-button"
            @click="openForm"
          >
            Personalizar Escritorio
          </VBtn>
          <VBtn
            color="orange darken-3"
            block
            class="custom-button"
          >
            Agregar Cotización
          </VBtn>
        </div>
      </VCol>
    </VRow>

    <VCardText class="subtitle-text d-flex justify-start">
      Mas de esta Linea
    </VCardText>
    <VRow
      justify="center"
      gap="10"
    >
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard
          elevation="0"
          class="image-card"
        >
          <VImg
            :src="img3"
            contain
            class="custom-img"
          />
          <VCardText class="card-text d-flex justify-center text-bold">
            Direccion
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard
          elevation="0"
          class="image-card"
        >
          <VImg
            :src="img3"
            contain
            class="custom-img"
          />
          <VCardText class="card-text d-flex justify-center text-bold">
            Operativa
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard
          elevation="0"
          class="image-card"
        >
          <VImg
            :src="img3"
            contain
            class="custom-img"
          />
          <VCardText class=" card-text d-flex justify-center text-bold">
            Alpha
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard
          elevation="0"
          class="image-card"
        >
          <VImg
            :src="img4"
            contain
            class="custom-img"
          />
          <VCardText class="card-text d-flex justify-center text-bold">
            Operativa
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard
          elevation="0"
          class="image-card"
        >
          <VImg
            :src="img3"
            contain
            class="custom-img"
          />
          <VCardText class="card-text d-flex justify-center text-bold">
            Direccion
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard
          elevation="0"
          class="image-card"
        >
          <VImg
            :src="img3"
            contain
            class="custom-img"
          />
          <VCardText class="card-text d-flex justify-center text-bold">
            Operativa
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard
          elevation="0"
          class="image-card"
        >
          <VImg
            :src="img3"
            contain
            class="custom-img"
          />
          <VCardText class=" card-text d-flex justify-center text-bold">
            Alpha
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard
          elevation="0"
          class="image-card"
        >
          <VImg
            :src="img4"
            contain
            class="custom-img"
          />
          <VCardText class="card-text d-flex justify-center text-bold">
            Operativa
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VCardItem>

  <!-- Formulario de Personalización -->
  <VDialog
    v-model="showCustomizationForm"
    max-width="600px"
  >
    <VCard>
      <VCardTitle class="text-h5 font-weight-bold">
        Personalizar Escritorio
      </VCardTitle>
      <VCardText>
        <VRow>
          <!-- Imagen (lado izquierdo) -->
          <VCol
            md="5"
            cols="12"
            class="d-flex justify-center"
          >
            <VImg
              :src="selectedImage"
              height="200px"
              contain
              class="rounded-lg"
            />
          </VCol>

          <!-- Selectores (lado derecho) -->
          <VCol
            md="7"
            cols="12"
            class="mt-5"
          >
            <VRow>
              <VCol
                cols="6"
                class="mt-5"
              >
                <VSelect
                  v-model="formSelector1"
                  label="Selector 1"
                  :items="['Opción 1', 'Opción 2']"
                  outlined
                />
              </VCol>
              <VCol
                cols="6"
                class="mt-5"
              >
                <VSelect
                  v-model="formSelector2"
                  label="Selector 2"
                  :items="['Opción A', 'Opción B']"
                  outlined
                />
              </VCol>
            </VRow>

            <VRow>
              <VCol cols="6">
                <VSelect
                  v-model="formSelector3"
                  label="Selector 3"
                  :items="['Opción X', 'Opción Y']"
                  outlined
                />
              </VCol>
              <VCol cols="6">
                <VSelect
                  v-model="formSelector4"
                  label="Selector 4"
                  :items="['Opción M', 'Opción N']"
                  outlined
                />
              </VCol>
            </VRow>
          </VCol>
        </VRow>

        <!-- Campo de descripción grande -->
        <VRow>
          <VCol cols="12">
            <VTextarea
              v-model="formDescription"
              label="Descripción"
              outlined
            />
          </VCol>
        </VRow>

        <!-- Campo de costo extra -->
        <p class="mt-3 d-flex justify-center">
          Costo estra:
        </p>
        <VRow class="d-flex justify-center mb-5">
          <VCol cols="4">
            <VTextField
              type="number"
              label="$0.00"
              outlined
            />
          </VCol>
        </VRow>

        <!-- Botones de acción -->
        <VRow class="mt-4 d-flex flex-column align-center">
          <VCol cols="12">
            <VBtn
              color="green"
              block
              class="rounded-button"
              @click="showCustomizationForm = false"
            >
              Agregar Cotización
            </VBtn>
          </VCol>
          <VCol
            cols="12"
            class="mt-2"
          >
            <VBtn
              color="red"
              block
              class="rounded-button"
              @click="showCustomizationForm = false"
            >
              Cancelar
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
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
  min-width: auto;
}
.custom-button {
  border-radius: 20px;
  font-weight: bold;
  margin-top: 8px;
}
</style>
