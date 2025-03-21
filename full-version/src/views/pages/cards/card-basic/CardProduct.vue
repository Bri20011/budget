<script setup lang="ts">
import eCommerce2 from '@images/eCommerce/2.png'
import { computed, ref } from 'vue'

// Precio base del producto
const basePrice = 899

// Opciones disponibles
const sizes = ['Pequeño', 'Mediano', 'Grande']
const structures = ['Madera', 'Metal', 'Plástico']

const colors = [
  { label: ' Azul', value: '#0000FF' },
  { label: 'Rojo', value: '#FF0000' },
  { label: 'Negro', value: '#000000' },
]

// Estado para almacenar las selecciones del usuario
const selectedSize = ref(sizes[0])
const selectedColor = ref(colors[0])
const selectedStructure = ref(structures[0])

// Calcular el precio dinámico basado en las selecciones
const calculatedPrice = computed(() => {
  let price = basePrice

  if (selectedSize.value === 'Mediano')
    price += 50
  if (selectedSize.value === 'Grande')
    price += 100

  if (selectedStructure.value === 'Metal')
    price += 75
  if (selectedStructure.value === 'Plástico')
    price -= 50

  return price
})
</script>

<template>
  <VRow>
    <VCol>
      <VCard class="custom-card">
        <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
          <!-- Imagen del producto -->
          <div class="ma-auto pa-5">
            <VImg
              width="137"
              height="176"
              :src="eCommerce2"
            />
          </div>

          <VDivider :vertical="$vuetify.display.mdAndUp" />

          <!-- Información del producto -->
          <div>
            <VCardItem>
              <VCardTitle>Apple iPhone 11 Pro</VCardTitle>
            </VCardItem>

            <VCardText>
              Apple iPhone 11 Pro smartphone. Anunciado en septiembre de 2019.
              Cuenta con una pantalla de 5,8″ y un procesador Apple A13 Bionic.
            </VCardText>

            <!-- Opciones de personalización -->
            <VCardText>
              <VRow>
                <VCol cols="6">
                  <VSelect
                    v-model="selectedSize"
                    :items="sizes"
                    label="Tamaño"
                    class="custom-select"
                  />
                </VCol>
                <VCol cols="6">
                  <VSelect
                    v-model="selectedStructure"
                    :items="structures"
                    label="Estructura"
                    class="custom-select"
                  />
                </VCol>
                <VCol cols="6">
                  <VSelect
                    v-model="selectedColor"
                    :items="colors"
                    label="Color"
                    item-title="label"
                    item-value="value"
                  >
                    <template #selection="{ item }">
                      <div class="d-flex align-center">
                        <div
                          :style="{
                            backgroundColor: item.raw.value,
                            width: '20px',
                            height: '20px',
                            borderRadius: '4px',
                            marginRight: '10px',
                          }"
                        />
                        {{ item.raw.label }}
                      </div>
                    </template>

                    <template #item="{ props, item }">
                      <VListItem v-bind="props">
                        <template #prepend>
                          <div
                            :style="{
                              backgroundColor: item.raw.value,
                              width: '20px',
                              height: '20px',
                              borderRadius: '4px',
                            }"
                          />
                        </template>
                      </VListItem>
                    </template>
                  </VSelect>
                </VCol>
              </VRow>
            </VCardText>

            <!-- Precio actualizado -->
            <VCardText class="text-subtitle-1 price">
              <span>Precio:</span>
              <span class="font-weight-medium">${{ calculatedPrice }}</span>
            </VCardText>

            <!-- Botones de acción -->
            <VCardActions class="justify-space-between">
              <VBtn class="custom-btn">
                <VIcon icon="bx-cart-add" />
                <span class="ms-2">Agregar al carrito</span>
              </VBtn>

              <VBtn
                icon="bx-share"
                color="secondary"
              />
            </VCardActions>
          </div>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}

.v-btn {
  transform: none;
}
</style>
