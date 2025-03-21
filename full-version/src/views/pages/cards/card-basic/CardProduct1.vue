<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import eCommerce2 from '@images/eCommerce/2.png'
import pages1 from '@images/pages/1.png'
import pages2 from '@images/pages/2.png'
import pages3 from '@images/pages/3.png'
import pages5 from '@images/pages/5.jpg'
import pages6 from '@images/pages/6.jpg'

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
]

const isCardDetailsVisible = ref(false)
</script>

<template>
  <VRow>
    <!-- 👉 Apple Watch card -->
    <VCol

    >
      <VCard>
        <VImg :src="pages6" />

        <VCardItem>
          <VCardTitle>Apple Watch</VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="font-weight-medium text-base">
            $249.40
          </p>

          <p class="mb-0">
            3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
          </p>
        </VCardText>

        <VBtn
          block
          class="rounded-t-0"
        >
          Agregar al carrito
        </VBtn>
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
