<script setup lang="ts">
const tableData = [
  {
    action: 'Collapse', icon: 'bx-chevron-up', details: 'Collapse card content using collapse action.',
  },
  {
    action: 'Refresh Content', icon: 'bx-refresh', details: 'Refresh your card content using refresh action.',
  },
  {
    action: 'Remove Card', icon: 'bx-x', details: 'Remove card from page using remove card action',
  },
]

const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 3000)

const refetchData = (hideOverlay: () => void) => {
  setTimeout(hideOverlay, 3000)
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Main Card  -->
      <AppCardActions
        title="Cards Actions"
        @refresh="refetchData"
      >
        <VCardText>
          <VTable>
            <thead>
              <tr>
                <th scope="col">
                  ACTION
                </th>
                <th scope="col">
                  ICON
                </th>
                <th scope="col">
                  DETAILS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="data in tableData"
                :key="data.icon"
              >
                <td>
                  {{ data.action }}
                </td>
                <td>
                  <VIcon
                    size="20"
                    :icon="data.icon"
                  />
                </td>
                <td>
                  {{ data.details }}
                </td>
              </tr>
            </tbody>
          </VTable>
        </VCardText>
      </AppCardActions>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Initial Load -->
      <AppCardActions
        v-model:loading="isLoading"
        title="Initial Load"
        no-actions
      >
        <VCardText>
          <p>You can specifically add Initial Load action using <code>loading</code> prop</p>
          <span>Refresh the page to see it again in action.</span>
        </VCardText>
      </AppCardActions>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Collapsible -->
      <AppCardActions
        action-collapsed
        title="Collapsible"
      >
        <VCardText>
          <p>You can specifically add collapsible action using <code>actionCollapse</code> prop</p>
          <span>Click on <VIcon
            size="20"
            icon="bx-chevron-up"
          /> icon to see it in action</span>
        </VCardText>
      </AppCardActions>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Refresh Content -->
      <AppCardActions
        title="Refresh Content"
        action-refresh
        @refresh="refetchData"
      >
        <VCardText>
          <p>You can specifically add refresh action using <code>actionRefresh</code> prop</p>
          <span>Click on <VIcon
            size="20"
            icon="bx-refresh"
          /> icon to see it in action</span>
        </VCardText>
      </AppCardActions>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Remove Card -->
      <AppCardActions
        title="Remove Card"
        action-remove
      >
        <VCardText>
          <p>You can specifically add remove action using <code>actionRemove</code> prop</p>
          <span>Click on <VIcon
            size="20"
            icon="bx-x"
          /> icon to see it in action</span>
        </VCardText>
      </AppCardActions>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Slots -->
      <AppCardActions
        title="Slots"
        @refresh="refetchData"
      >
        <template #before-actions>
          <VChip
            class="me-3"
            color="primary"
            size="small"
          >
            3 Updates
          </VChip>
        </template>

        <VCardText>
          <p><code>app-card-actions</code> also provides <code>before-actions</code> and <code>after-actions</code> slot</p>
          <span>You can find more details in our documentation</span>
        </VCardText>
      </AppCardActions>
    </VCol>
  </VRow>
</template>
