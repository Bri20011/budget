<script lang="ts" setup>
import { themeConfig } from '@themeConfig'
import NavBarI18n from '@core/components/I18n.vue'
import { HorizontalNavLayout } from '@layouts'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import navItems from '@/navigation/horizontal'
import img1 from '@/assets/images/logo-color.png'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import NavSearchBar from '@/layouts/components/NavSearchBar.vue'
import NavbarShortcuts from '@/layouts/components/NavbarShortcuts.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
</script>

<template>
  <HorizontalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #logo>
      <RouterLink
        to="/"
        class="app-logo d-flex align-center gap-x-2"
      >
        <VImg
          :src="img1"
          class="custom-img" width="140px" height="100px"
        />
        <!-- <VNodeRenderer :nodes="themeConfig.app.logo" /> -->
      </RouterLink>
    </template>
    <template #navbar>
      <!-- <NavSearchBar trigger-btn-class="ms-lg-n3" /> -->

      <!--
        <NavBarI18n
        v-if="themeConfig.app.i18n.enable && themeConfig.app.i18n.langConfig?.length"
        :languages="themeConfig.app.i18n.langConfig"
        />

        <NavbarThemeSwitcher />
        <NavbarShortcuts />
        <NavBarNotifications class="me-2" />
      -->
      <UserProfile />
    </template>

    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </HorizontalNavLayout>
</template>

<style lang="scss" scoped>
.app-logo-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.15px;
  line-height: 1.75rem;
}
</style>
