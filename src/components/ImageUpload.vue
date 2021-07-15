<template>
  <label
    class='flex flex-row border-2 rounded items-center justify-between p-2 cursor-pointer'
    @dragenter.prevent
    @dragover.prevent
    @drop.prevent="handleDrop"
  >
    {{ props.label }}: {{ props.filename || 'None' }}
    <img src="/assets/icon-image-upload.svg" class="h-5 inline" />
    <input
      class='visually-hidden'
      @change="handleChangeMedia"
      type='file'
      accept='image/*'
    >
  </label>
</template>

<script setup lang="ts">
  const props = defineProps<{
    label: string
    filename?: string
  }>()
  const emit = defineEmits<{
    (event: 'upload', file: File): void
  }>()
  
  const handleFiles = (files: FileList | null | undefined) => {
    const file = Array.from(files || []).find(file => file.type.startsWith('image/'))
    if (file) emit('upload', file)
  }

  const handleDrop = (event: DragEvent) => {
    handleFiles(event.dataTransfer?.files)
  }

  const handleChangeMedia = (event: Event) => {
    const target = event.target as HTMLInputElement
    handleFiles(target.files)    
    target.value = ''
  }
</script>

<style scoped>
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>