<script setup lang="ts">
import * as demoCode from '@/views/demos/forms/form-layout/demoCodeFormLayout'
</script>

<template>
  <div>
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <!-- 👉 Horizontal Form -->
        <AppCardCode
          title="Horizontal Form"
          :code="demoCode.horizontalForm"
        >
          <DemoFormLayoutHorizontalForm />
        </AppCardCode>
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <!-- 👉 Horizontal Form with Icons -->
        <AppCardCode
          title="Horizontal Form with Icons"
          :code="demoCode.horizontalFormWithIcons"
        >
          <DemoFormLayoutHorizontalFormWithIcons />
        </AppCardCode>
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <!-- 👉 Vertical Form -->
        <AppCardCode
          title="Vertical Form"
          :code="demoCode.verticalForm"
        >
          <DemoFormLayoutVerticalForm />
        </AppCardCode>
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <!-- 👉 Vertical Form with Icons -->
        <AppCardCode
          title="Vertical Form with Icons"
          :code="demoCode.verticalFormWithIcons"
        >
          <DemoFormLayoutVerticalFormWithIcons />
        </AppCardCode>
      </VCol>

      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <AppCardCode
          title="Multiple Columnsas"
          :code="demoCode.multipleColumn"
        >
          <DemoFormLayoutMultipleColumn />
        </AppCardCode>
      </VCol>
    </VRow>

    <VRow class="match-height my-3">
      <VCol
        cols="12"
        md="6"
      >
        <!-- 👉 Form Hint -->
        <AppCardCode
          title="Form Hint"
          :code="demoCode.formHint"
        >
          <DemoFormLayoutFormHint />
        </AppCardCode>
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <!-- 👉 Form Validation -->
        <AppCardCode
          title="Form Validation"
          :code="demoCode.formValidation"
        >
          <DemoFormLayoutFormValidation />
        </AppCardCode>
      </VCol>
    </VRow>

    <VRow>
      <VCol cols="12">
        <!-- 👉 Form with Tabs -->
        <AppCardCode
          title="Form with Tabs"
          no-padding
          :code="demoCode.formWithTabs"
        >
          <DemoFormLayoutFormWithTabs />
        </AppCardCode>
      </VCol>

      <VCol cols="12">
        <!-- 👉 Collapsible Section -->
        <h6 class="text-h6 mb-6">
          Collapsible Section
        </h6>

        <DemoFormLayoutCollapsible />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Collapsible Section -->
        <h6 class="text-h6 mb-6">
          Sticky Section
        </h6>

        <DemoFormLayoutSticky />
      </VCol>
    </VRow>
  </div>
</template>
