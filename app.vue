<template>
  <div>
    <NuxtPage />
    <br />
    <br />
    <NuxtLink :to="localePath(`/somepage/${$t('slug')}`)">{{ $t('message') }}</NuxtLink>
    <br />
    ---------------
    <br />
    <LanguageSwitcher />
    <br />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

</script>