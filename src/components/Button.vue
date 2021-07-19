<template>
  <button
    class="flex flex-row gap-1 items-center min-w-max p-2 border-2 rounded x-focus"
    @click="() => emit('click')"
  >
    <img :src="'./assets/icon-' + props.icon + '.svg'" class="h-5 inline" aria-hidden />
    <span class="align-middle">{{ props.label }}</span>
  </button>
</template>

<script setup lang='ts'>
  const props = defineProps<{
    label: string
    icon: string
  }>()
  const emit = defineEmits<{
    (event: 'click'): void
  }>()
</script>