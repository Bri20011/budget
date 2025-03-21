<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(true)
const items = ["Admin", "Vendedor"] as const

</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol
        cols="12"
        md="8"
      >
        <AppTextField
          v-model="city"
          label="Nombre de Empleado"
          placeholder="Juan Perez"
        />
      </VCol>
      <VCol
        cols="12"
        md="4"
      >
        <AppTextField
          v-model="fullName"
          label="N° Empleado"
          placeholder="2"
        />
      </VCol>
      <VCol cols="12" md="8">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>
      <VCol cols="12" md="4">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Seleciona un acceso"
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
