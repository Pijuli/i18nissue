<template>
  <div style="display: grid">
    <nuxt-link
      v-for="l in locales"
      :key="l.code"
      :to="switchLocalePath(l.code)"
    >
    {{l.code}}
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath()
</script>
