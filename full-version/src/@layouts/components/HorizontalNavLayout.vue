<script lang="ts" setup>
import { HorizontalNav } from '@layouts/components'
import type { HorizontalNavItems } from '@layouts/types'
import { useLayoutConfigStore } from '@layouts/stores/config'

defineProps<{
  navItems: HorizontalNavItems
}>()

const configStore = useLayoutConfigStore()
</script>

<template>
  <div
    class="layout-wrapper"
    data-allow-mismatch
    :class="configStore._layoutClasses"
  >
    <div
      class="layout-navbar-and-nav-container"
      :class="configStore.isNavbarBlurEnabled && 'header-blur'"
    >
      <div class="nav-links-container">
        <H1>Cuenta</H1>
        <H1>Nosotros</H1>
        <H1>Catálogo</H1>
        <H1>Contacto</H1>
        <H1>Cerrar sesión</H1>
      </div>
    </div>
    <div
      class="layout-navbar-and-nav-container"
      :class="configStore.isNavbarBlurEnabled && 'header-blur'"
    >
      <!-- 👉 Navbar -->
      <div class="layout-navbar">
        <div class="navbar-content-container">
          <slot name="logo" />
          <VSpacer />
          <div class="layout-horizontal-nav">
            <div class="horizontal-nav-content-container">
              <HorizontalNav :nav-items="navItems" />
            </div>
          </div>
          <VSpacer />
          <slot name="navbar" />
        </div>
      </div>
    </div>

    <!-- <main class="layout-page-content"> -->
    <main>
      <slot />
    </main>

    <!-- 👉 Footer -->
    <footer class="layout-footer">
      <div class="footer-content-container">
        <slot name="footer" />
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/placeholders";
@use "@layouts/styles/mixins";
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@400&display=swap');


.nav-links-container {
  display: flex;
  gap: 100px; /* Espaciado entre elementos */
  justify-content: flex-end; /* Alinea los textos a la derecha */
  align-items: center; /* Centra verticalmente */
  width: 100%; /* Asegura que ocupe todo el ancho */
  background-color:#FFEFE9;
  padding: 10px 20px;
  padding-right: 50px;

}
h1 {
    font-weight: normal; /* Elimina la negrita */
    // font-family: 'Arial', sans-serif; 
    font-family: 'Exo', sans-serif;
    font-size: 15px; /* Ajusta el tamaño de la fuente si es necesario */
  }
.layout-wrapper {
  &.layout-nav-type-horizontal {
    display: flex;
    flex-direction: column;

    // // TODO(v2): Check why we need height in vertical nav & min-height in horizontal nav
    // min-height: 100%;
    min-block-size: 100dvh;

    .layout-navbar-and-nav-container {
      z-index: 1;
    }

    .layout-navbar {
      z-index: variables.$layout-horizontal-nav-layout-navbar-z-index;
      block-size: variables.$layout-horizontal-nav-navbar-height;
    }

    // 👉 Navbar
    .navbar-content-container {
      //@include mixins.boxed-content;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    // 👉   Content height fixed
    &.layout-content-height-fixed {
      max-block-size: 100dvh;

      .layout-page-content {
        overflow: hidden;

        > :first-child {
          max-block-size: 100%;
          overflow-y: auto;
        }
      }
    }

    // 👉 Footer
    // Boxed content
    .layout-footer {
      .footer-content-container {
        //@include mixins.boxed-content;
      }
    }
  }

  // If both navbar & horizontal nav sticky
  &.layout-navbar-sticky.horizontal-nav-sticky {
    .layout-navbar-and-nav-container {
      position: sticky;
      inset-block-start: 0;
      will-change: transform;
    }
  }

  &.layout-navbar-hidden.horizontal-nav-hidden {
    .layout-navbar-and-nav-container {
      display: none;
    }
  }
}

// 👉 Horizontal nav nav
.layout-horizontal-nav {
  z-index: variables.$layout-horizontal-nav-z-index;

  .horizontal-nav-content-container {
    @include mixins.boxed-content(true);
  }
}
</style>
