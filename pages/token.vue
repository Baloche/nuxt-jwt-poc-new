<script setup lang="ts">
async function getToken() {
  const { public: { tokenUrl } } = useRuntimeConfig()
  const token = await $fetch<string>(tokenUrl, { credentials: 'include' })
  console.log({ token })
}
</script>

<template>
  <button @click="getToken">
    get token
  </button>
</template>
