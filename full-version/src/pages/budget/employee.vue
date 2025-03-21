<script setup lang="ts">
import { ref } from "vue";
import * as demoCodeSimpleTable from "@/views/demos/forms/tables/data-table/demoCodeDataTable";
import * as demoCode from "@/views/demos/forms/form-layout/demoCodeFormLayout";
import { VRow } from "vuetify/components";

// Estado para mostrar/ocultar el formulario
const showForm = ref(false);

// Función para alternar el formulario
const toggleForm = () => {
  showForm.value = !showForm.value;
};
</script>

<template>
  <VRow>
    <VCol cols="6">
      <!-- Botón "Crear Empleado" encima de la tabla -->
      <VBtn color="primary" @click="toggleForm">Crear Empleado</VBtn>
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12">
      <AppCardCode
        title="Lista de Empleados"
        :code="demoCodeSimpleTable.rowEditingViaDialog"
        no-padding
      >
        <TableEmployee />
      </AppCardCode>
    </VCol>
  </VRow>

  <!-- Formulario en un VDialog para aparecer sobre la tabla -->
  <VDialog v-model="showForm" max-width="640px">
    <VCard>
      <VCardTitle>Registrar Empleado</VCardTitle>
      <VCardText>
        <FormEmployee />
      </VCardText>
      <VCardActions>
        <VRow class="w-100">
          <VCol cols="12" class="d-flex gap-4 justify-end">
            <VBtn type="submit"> Guardar </VBtn>
            <VBtn
              type="reset"
              @click="toggleForm"
              color="secondary"
              variant="tonal"
            >
              Cancelar
            </VBtn>
          </VCol>
        </VRow>
        <VSpacer />
      </VCardActions>
    </VCard>
  </VDialog>
</template>
