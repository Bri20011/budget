<script setup lang="ts">
import cube from '@images/cards/cube-secondary.png'
import pages1 from '@images/pages/1.png'
import img1 from './img/spiga/1JULIETA/oficina/1.jpg'
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
    <VCardTitle class="d-flex justify-center">
      Spiga
    </VCardTitle>
    <VCardText class="d-flex justify-center">
      Hecha un vistazo más de cerca a nuestras líneas
    </VCardText>

    <VRow>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Julieta
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Ana
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Nevado
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Descanso
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Nube
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Spring
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Mink
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Snowball
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Blue
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Opi
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Teller
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        sm="3"
        md="3"
      >
        <VCard>
          <VImg
            :src="img1"
            cover
          />
          <VCardText class="d-flex justify-center">
            Black wolf
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VCardItem>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
.nav-container{
  background-color:white;
  width: 100%;
}
</style>
