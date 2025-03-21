<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(true)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="N° de Producto"
          placeholder="PROD-001234"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="Color Silleria"
          placeholder="Azul Marino"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Tono / MBASE"
          placeholder="Roble Oscuro"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Codigo de color/tipo tela/ MT"
          placeholder="TX-4567 / Tela Poliéster"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Estructura"
          placeholder="Acero Inoxidable"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Silla"
          placeholder="Ergonómica con descansa brazos"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Dimension melamina"
          placeholder="120x60 cm"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Espesor melamina"
          placeholder="18 mm"
        />
      </VCol>
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Activo"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
