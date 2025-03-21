<script lang="ts" setup>
const firstName = ref("");
const lastName = ref("");
const city = ref("");
const country = ref("");
const company = ref("");
const email = ref("");
const items = ["Juan Pérez", "María López", "Carlos Hernández", "Ana González","José Ramírez"] as const
const itemsProduct = ["Silla", "Escritorio", "Notebook", "Mueble"] as const
const itemsDepartment= ["Dpto Compras", "Dpto Contable", "Dpto Informatica", "Dpto Compras"] as const
const itemsCompany = ["Spiga", "Desa"] as const
const checkbox = ref(false)

// const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="6" md="2">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="itemsCompany"
          chips
          multiple
          label="Seleciona Empresa"
          placeholder=""
        />
      </VCol>
      <VCol cols="6" md="4">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Seleciona Cliente"
          placeholder=""
        />
      </VCol>
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="company"
          label="Vendedor"
          placeholder="Juan Perez"
          disabled
        />
      </VCol>
      <VCol cols="12" md="2">
        <AppDateTimePicker
          v-model="birthDate"
          label="Selecciona una Fecha"
          placeholder=""
        />
      </VCol>
      <VDivider class="mt-5 mb-5"></VDivider>
      <VCol cols="4">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="itemsProduct"
          chips
          multiple
          label="Seleciona un Producto"
          placeholder=""
        />
      </VCol>
      <VCol
        cols="12"
        md="2"
      >
        <AppTextField
          v-model="company"
          label="Ingresa Cantidad"
          placeholder="5"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
