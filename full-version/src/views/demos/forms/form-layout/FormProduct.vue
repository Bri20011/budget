<script lang="ts" setup>
const firstName = ref("");
const lastName = ref("");
const city = ref("");
const country = ref("");
const company = ref("");
const email = ref("");
const checkbox = ref(true);
const items = ["5pza", "20pza", "50pza", "80pza","100pza"] as const
const itemsProduct = ["Electronica", "Inmueble", "Mueble Oficina"] as const


</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12" md="6">
        <AppTextField
          v-model="email"
          label="Numero de Producto"
          placeholder="Comercializadora del Centro S.A. de C.V.."
        />
      </VCol>
      <VCol cols="12" md="6">
        <AppTextField
          v-model="city"
          label="Nombre del Producto"
          placeholder="Distribuciones Globales S.A. de C.V."
        />
      </VCol>
      <VCol cols="12" md="6">
        <AppTextField
          v-model="company"
          label="Descripcion"
          placeholder="1500"
        />
      </VCol>
      <VCol cols="3" md="6">
        <AppTextField
          v-model="company"
          label="Color"
          placeholder="Roma Norte"
        />
      </VCol>
      <VCol cols="12" md="6">
        <AppTextField
          v-model="company"
          label="Costo de Adquisicion"
          placeholder="Cuauhtémoc, CDMX"
        />
      </VCol>
      <VCol cols="12" md="6">
        <AppTextField
          v-model="company"
          label="Porcentaje"
          placeholder="06700"
        />
      </VCol>
      <VCol cols="12" md="6">
        <AppTextField
          v-model="company"
          label="Precio de Venta"
          placeholder="Ciudad de México"
        />
      </VCol>
      <VCol cols="12" md="6">
        <AppTextField
          v-model="company"
          label="Porcentaje Variable"
          placeholder="Comercio al por mayor"
        />
      </VCol>
      <VCol cols="12" md="3">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Unidad de Medida"
          placeholder=""
        />
      </VCol>
      <VCol cols="12" md="3">
        <AppTextField
          v-model="company"
          label="Precio Total"
          placeholder="4500"
        />
      </VCol>
      <VCol cols="12" md="6">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="itemsProduct"
          chips
          multiple
          label="Selecione un tipo de producto"
          placeholder=""
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
