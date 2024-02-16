<template>
  <div>
    <LanguageSwitcher />
    <br />
    <NuxtLink :to="localePath(`/somepage/${$t('slug')}`)">{{ $t('message') }}</NuxtLink>
    <br />
    <br />
    ---------------
    <br />
    <br />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

</script>