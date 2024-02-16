<template>
  <div>
    {{ $t('somepage') }}
    <br/>
    slug: {{ route.params.slug }}
  </div>
</template>

<script setup lang="ts">
const setI18nParams = useSetI18nParams()
const route = useRoute()

defineI18nRoute({
  paths: {
    es: '/unapagina/[slug]',
    en: '/somepage/[slug]'
  }
})

setI18nParams({
  es: { slug: 'espanol' },
  en: { slug: 'english' }
})
</script>

<style scoped>

</style>