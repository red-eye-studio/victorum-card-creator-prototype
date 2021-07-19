<template>
  <label class="cursor-pointer" @dragenter.prevent @dragover.prevent @drop.prevent="handleDrop">
    {{ props.label }}:
    <div
      :title="`Upload a ${props.label}`"
      class="x-focus-within p-2 items-center justify-between flex flex-row border-2 rounded"
    >
      {{ props.filename || 'None' }}
      <img class="h-5" src="/assets/icon-image-upload.svg" aria-hidden />
      <input class="x-visually-hidden" @change="handleChangeMedia" type="file" accept="image/*" />
    </div>
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
