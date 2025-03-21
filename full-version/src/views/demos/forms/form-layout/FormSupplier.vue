<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(true)
const itemsProduct = ["Electronica", "Inmueble", "Mueble Oficina"] as const

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
          label="Nombre de la Empresa"
          placeholder="Comercializadora del Centro S.A. de C.V.."
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="Razon Social"
          placeholder="Distribuciones Globales S.A. de C.V."
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Calle"
          placeholder="Avenida Insurgentes"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Numero Interior"
          placeholder="203"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Numero Exterior"
          placeholder="1500"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Colonia"
          placeholder="Roma Norte"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Alcaldia"
          placeholder="Cuauhtémoc, CDMX"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="CP"
          placeholder="06700"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Entidad Federativa"
          placeholder="Ciudad de México"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Giro"
          placeholder="Comercio al por mayor"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Telefono"
          placeholder="+52 1 55 1234 5678"
        />
      </VCol>
      <VCol cols="12" md="6">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="itemsProduct"
          chips
          multiple
          label="Seleciona Tipo Producto"
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
