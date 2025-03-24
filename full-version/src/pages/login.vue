<!-- ❗Errors in the form are set on line 60 -->
<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'
import authV2LoginIllustration from '@images/pages/logo-login.jpg'
import logoSpiga from '@images/logo-color.png'
import { themeConfig } from '@themeConfig'

definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const isPasswordVisible = ref(false)

const route = useRoute()
const router = useRouter()

const ability = useAbility()

const errors = ref<Record<string, string | undefined>>({
  email: undefined,
  password: undefined,
})

const refVForm = ref<VForm>()

const credentials = ref({
  email: 'admin@demo.com',
  password: 'admin',
})

const rememberMe = ref(false)

const login = async () => {
  try {
    const res = await $api('/auth/login', {
      method: 'POST',
      body: {
        email: credentials.value.email,
        password: credentials.value.password,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    const { accessToken, userData, userAbilityRules } = res

    useCookie('userAbilityRules').value = userAbilityRules
    ability.update(userAbilityRules)

    useCookie('userData').value = userData
    useCookie('accessToken').value = accessToken

    // Redirect to `to` query if exist or redirect to index route
    // ❗ nextTick is required to wait for DOM updates and later redirect
    await nextTick(() => {
      router.replace(route.query.to ? String(route.query.to) : '/catalogo/spiga')
    })
  }
  catch (err) {
    console.error(err)
  }
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid)
        login()
    })
}
</script>

<template>
  <RouterLink to="/">
    <!--
      <div class="auth-logo d-flex align-center gap-x-2">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">
      {{ themeConfig.app.title }}
      </h1>
      </div>
    -->
  </RouterLink>

  <VRow
    no-gutters
    class="auth-wrapper bg-surface h-100"
  >
    <VCol
      md="6"
      class="d-none d-md-flex"
    >
      <div class="d-flex align-center justify-center w-100 h-100">
        <VImg
          cover
          height="100%"
          position="left"
          aspect-ratio="1/1"
          :src="authV2LoginIllustration"
          class="auth-illustration"
        >
          <div class="d-flex  justify-center align-center h-100 w-100">
            <VRow dense>
              <VCol
                cols="12"
                class="d-flex justify-center"
              >
                <VImg
                  max-width="200"
                  :src="logoSpiga"
                />
              </VCol>
              <VCol
                cols="12"
                class="d-flex justify-center"
              >
                <VImg class="d-flex justify-center">
                  <h1 class="text-h1 text-center">
                    <strong class="font-weight-bold">¡Bienvenido!</strong>
                  </h1>
                </VImg>
              </VCol>
            </VRow>
          </div>
        </VImg>
      </div>
    </VCol>

    <VCol
      cols="12"
      md="6"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        flat
        max-width="500"
        class="mt-12 mt-sm-0 pa-6 w-100"
      >
        <VCardText>
          <h4 class="text-h4 mb-1">
            <strong class="font-weight-bold">Inicia Sesión</strong>
            <!-- Inicia Sesión<span class="text-capitalize"> {{ themeConfig.app.title }} </span> -->
          </h4>
          <p class="mb-0">
          <!-- Please sign-in to your account and start the adventure -->
          </p>
        </VCardText>
        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <p class="text-h6 mb-1">
                  <strong class="font-weight-bold">Usuario</strong>
                  <!-- Inicia Sesión<span class="text-capitalize"> {{ themeConfig.app.title }} </span> -->
                </p>
                <AppTextField
                  v-model="credentials.email"
                  placeholder="johndoe@email.com"
                  type="email"
                  autofocus
                  :rules="[requiredValidator, emailValidator]"
                  variant="outlined"
                  rounded="pill"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <p class="text-h6 mb-1">
                  <strong class="font-weight-bold">Usuario</strong>
                  <!-- Inicia Sesión<span class="text-capitalize"> {{ themeConfig.app.title }} </span> -->
                </p>
                <AppTextField
                  v-model="credentials.password"
                  placeholder="············"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :error-messages="errors.password"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  variant="outlined"
                  rounded="pill"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center flex-wrap justify-space-between my-6">
                  <VCheckbox
                    v-model="rememberMe"
                    label="Recordar cuenta"
                  />
                </div>

                <VBtn
                  block
                  type="submit"
                  rounded="pill"
                >
                  Iniciar Sesión
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                cols="12"
                class="text-body-1 text-center"
              >
                <span class="d-inline-block">
                <!-- New on our platform? -->
                </span>
                <RouterLink
                  class="text-primary ms-1 d-inline-block text-body-1"
                  :to="{ name: 'register' }"
                >
                <!-- Create an account -->
                </RouterLink>
              </VCol>
            <!--
              <VCol
              cols="12"
              class="d-flex align-center"
              >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
              </VCol>
            -->

            <!-- auth providers -->
            <!--
              <VCol
              cols="12"
              class="text-center"
              >
              <AuthProvider />
              </VCol>
            -->
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.auth-illustration::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* Blanco con opacidad */
}
</style>
