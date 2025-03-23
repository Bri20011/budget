<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const router = useRouter()
const ability = useAbility()

// TODO: Get type from backend
const userData = useCookie<any>('userData')

const logout = async () => {
  // Remove "accessToken" from cookie
  useCookie('accessToken').value = null

  // Remove "userData" from cookie
  userData.value = null

  // Remove "userData" from cookie
  userData.value = null

  // Redirect to login page
  await router.push('/login')

  // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page
  // Remove "userAbilities" from cookie
  useCookie('userAbilityRules').value = null
  await router.push('/login')

  // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page
  // Remove "userAbilities" from cookie
  useCookie('userAbilityRules').value = null

  // Reset ability to initial ability
  ability.update([])
}
</script>

<template>
  <VAvatar
    size="90"
    class="cursor-pointer"
    :color="!(userData && userData.avatar) ? 'primary' : undefined"
    :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
  >
    <!--
      <VImg
      v-if="userData && userData.avatar"
      :src="userData.avatar"
      />
    -->
    <VIcon icon="bx-user" />
    <h1 class="ml-2">Marcos</h1>

    <!-- SECTION Menu -->
    <VMenu
      activator="parent"
      width="240"
      location="bottom end"
      offset="20px"
    >
      <VList>
        <VListItem>
          <div class="d-flex gap-2 align-center">
            <VListItemAction>
              <VBadge
                dot
                location="bottom right"
                offset-x="3"
                offset-y="3"
                color=""
                bordered
              >
                <VAvatar
                  size="38"
                  class="cursor-pointer"
                >
                  <VIcon icon="bx-user" />
                </VAvatar>
              </VBadge>
            </VListItemAction>
            <div>
              <VListItemTitle class="font-weight-medium">
                {{ userData.fullName || userData.username }}
              </VListItemTitle>
              <VListItemSubtitle class="text-disabled text-capitalize">
                {{ userData.role }}
              </VListItemSubtitle>
            </div>
          </div>
        </VListItem>

        <PerfectScrollbar :options="{ wheelPropagation: false }">
          <template
            v-for="item in userProfileList"
            :key="item.title"
          >
            <VListItem
              v-if="item.type === 'navItem'"
              :to="item.to"
            >
              <template #prepend>
                <VIcon
                  :icon="item.icon"
                  size="22"
                />
              </template>

              <VListItemTitle>{{ item.title }}</VListItemTitle>

              <template
                v-if="item.badgeProps"
                #append
              >
                <VBadge
                  rounded
                  class="me-3"
                  v-bind="item.badgeProps"
                />
              </template>
            </VListItem>

            <VDivider
              v-else
              class="my-1"
            />
          </template>
          <VDivider class="my-1" />
          <VListItem
            prepend-icon="bx-power-off"
            @click="logout"
          >
            Salir
          </VListItem>
        </PerfectScrollbar>
      </VList>
    </VMenu>
    <!-- !SECTION -->
  </VAvatar>
</template>
