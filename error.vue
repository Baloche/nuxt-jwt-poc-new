<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
onMounted(async () => {
  if (props.error.statusCode === 401) {
    const { public: { tokenUrl, loginUrl } } = useRuntimeConfig()
    try {
      const token = await $fetch<string>(tokenUrl)
      await $fetch('/api/login', { method: 'POST', body: { token } })
      console.log('reloadNuxtApp()')
    }
    catch (e) {
      console.log({ loginUrl }, e)
    }
  }
})
</script>

<template>
  coucou
  <pre>{{ error }}</pre>
</template>
