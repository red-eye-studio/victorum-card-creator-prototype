<template>
  <fieldset class='border-2 rounded pb-2 px-2'>
    <legend>{{ props.label }}</legend>
    <slot></slot>
  </fieldset>
</template>

<script setup lang='ts'>
  const props = defineProps<{
    label: string
  }>()
</script>