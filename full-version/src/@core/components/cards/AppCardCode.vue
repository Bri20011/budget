<script lang="ts" setup>
interface Props {
  title: string
  codeLanguage?: string
  noPadding?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  codeLanguage: 'markup',
  noPadding: false,
})
</script>

<template>
  <!-- eslint-disable regex/invalid -->
  <VCard class="app-card-code">
    <VCardItem>
      <VCardTitle>{{ props.title }}</VCardTitle>
    </VCardItem>
    <slot v-if="noPadding" />
    <VCardText v-else>
      <slot />
    </VCardText>
  </VCard>
</template>

<style lang="scss">
@use "@styles/variables/vuetify";

code[class*="language-"],
pre[class*="language-"] {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 14px;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  border-radius: vuetify.$card-border-radius;
  max-block-size: 500px;
}

.app-card-code-copy-icon {
  inset-block-start: 1.2em;
  inset-inline-end: 0.8em;
}

.app-card-code {
  .shiki {
    padding: 0.75rem;
    text-wrap: wrap;
  }
}
</style>
