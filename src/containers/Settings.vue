<template>
  <Section class="flex flex-col gap-2 flex-grow w-96" label="Settings">
    <ImageUpload
      label="Background Image"
      :filename="state.settings.backgroundImage.filename"
      @upload="handleBackgroundImageUpload"
    />
    <ImageUpload
      label="Top Left Image"
      :filename="state.settings.topLeftImage.filename"
      @upload="handleTopLeftImageUpload"
    />
    <ImageUpload
      label="Top Center Image"
      :filename="state.settings.topCenterImage.filename"
      @upload="handleTopCenterImageUpload"
    />
    <ImageUpload
      label="Top Right Image"
      :filename="state.settings.topRightImage.filename"
      @upload="handleTopRightImageUpload"
    />
  </Section>
</template>

<script setup lang="ts">
  import Section from '../components/Section.vue'
  import ImageUpload from '../components/ImageUpload.vue'
  import { state } from '../state'
  import { fileToString } from '../utilities/file'

  const handleBackgroundImageUpload = (file: File) => handleUpload('backgroundImage', file)
  const handleTopLeftImageUpload = (file: File) => handleUpload('topLeftImage', file)
  const handleTopCenterImageUpload = (file: File) => handleUpload('topCenterImage', file)
  const handleTopRightImageUpload = (file: File) => handleUpload('topRightImage', file)

  const handleUpload = async (name: keyof typeof state.settings, file: File) => {
    state.settings[name] = { filename: file.name, payload: await fileToString(file) }
}
</script>
