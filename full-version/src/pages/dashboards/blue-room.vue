<script setup lang="ts">
import cube from '@images/cards/cube-secondary.png'
import pages1 from '@images/pages/1.png'
import img1 from './img/sillas/1TAMARINDO/DIRECCION/silla-5.png'
import img2 from './img/sillas/1TAMARINDO/DIRECCION/silla-5.png'
import img3 from './img/sillas/1TAMARINDO/OPERATIVAS.png'
import img4 from './img/sillas/1TAMARINDO/GAMER.png'
import CrmCustomerRatings from '@/views/dashboards/crm/CrmCustomerRatings.vue'
import CrmCustomerTable from '@/views/dashboards/crm/CrmCustomerTable.vue'
import CrmEarningReport from '@/views/dashboards/crm/CrmEarningReport.vue'
import CrmGeneratedLeads from '@/views/dashboards/crm/CrmGeneratedLeads.vue'
import CrmSalesActivity from '@/views/dashboards/crm/CrmSalesActivity.vue'
import CrmSalesAnalytics from '@/views/dashboards/crm/CrmSalesAnalytics.vue'
import CrmSalesStats from '@/views/dashboards/crm/CrmSalesStats.vue'
import CrmSession from '@/views/dashboards/crm/CrmSessions.vue'
import CrmTeamMembers from '@/views/dashboards/crm/CrmTeamMembers.vue'
import CrmTopProducts from '@/views/dashboards/crm/CrmTopProducts.vue'
import CardAdvanceSalesByCountries from '@/views/pages/cards/card-advance/CardAdvanceSalesByCountries.vue'
</script>

<template>
  <VCardItem class="nav-container">
    <VCardTitle class="font-weight-bold d-flex justify-center">
      Blue Room
    </VCardTitle>
    <VCardText class="subtitle-text d-flex justify-center">
      Hecha un vistazo más de cerca a nuestras sillas
    </VCardText>

    <VRow justify="center" gap="10">
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
            :src="img1"
            contain
            class="custom-img"
          />
          <VCardText class="card-text d-flex justify-center text-bold">
            Dirección
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
            :src="img2"
            contain
            class="custom-img"
          />
          <VCardText class="card-text d-flex justify-center text-bold">
            Elemento
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
            Operativas
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
            Gamer
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VCardItem>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;700&display=swap');

.nav-container {
  background-color: white;
  width: 100%;
}
/* Título Spiga */
.title-text {
  font-family: 'Exo', sans-serif;
  font-weight: 800; /* Bold */
  font-size: 26px;
  text-align: center;
  font-weight: bold; /* Negrita extra */
  text-transform: uppercase; /* Opcional: pone en mayúsculas */
}

/* Subtítulo */
.subtitle-text {
  font-family: 'Exo', sans-serif;
  font-weight: 300; /* Light */
  font-size: 16px;
  text-align: center;
}

/* Texto de tarjetas */
.card-text {
  font-family: 'Exo', sans-serif;
  font-weight: 400; /* Regular */
  font-size: 16px;
  text-align: center;
}

.image-card {
  border-radius: 0 !important;
  overflow: hidden;
}

.custom-img {
  width: 100%;
  height: 200px; /* Ajusta según tu necesidad */
  object-fit: cover;
  border-radius: 0 !important;
}
</style>
