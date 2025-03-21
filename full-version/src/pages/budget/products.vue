<script setup lang="ts">
import { ref } from 'vue'
import { VRow } from 'vuetify/components'
import * as demoCodeSimpleTable from '@/views/demos/forms/tables/data-table/demoCodeDataTable'
import * as demoCode from '@/views/demos/forms/form-layout/demoCodeFormLayout'
import CardBasic from '@/views/pages/cards/card-basic/CardProduct.vue'
import CardBasic1 from '@/views/pages/cards/card-basic/CardProduct1.vue'

// Estado para mostrar/ocultar el formulario
const showForm = ref(false)

// Función para alternar el formulario
const toggleForm = () => {
  showForm.value = !showForm.value
}
</script>

<template>
  <div>
    <VRow>
      <VCol cols="6">
        <CardBasic />
      </VCol>
      <VCol cols="6">
        <CardBasic />
      </VCol>
      <VCol cols="6">
        <CardBasic1 />
      </VCol>
      <VCol cols="6">
        <CardBasic1 />
      </VCol>
    </VRow>
  </div>
</template>
