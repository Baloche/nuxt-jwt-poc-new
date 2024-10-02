<script setup lang="ts">
const plop = await $fetch('/api/user')
</script>

<template>
  <div>
    {{ plop }}
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
