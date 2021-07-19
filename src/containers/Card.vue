<template>
  <div class="w-full flex-shring overflow-hidden m-16">
    <Canvas :src="canvas" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, watchEffect } from '@vue/runtime-core'
  import { state } from '../state'
  import Canvas from '../components/Canvas.vue'
  import { getImageFromString } from '../utilities/image'

  const { scale: SCALE_FACTOR = 32 } = defineProps<{ scale?: number }>()

  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')!

  watchEffect(async () => {
    const [backgroundImage, topLeftImage, topCenterImage, topRightImage] = await Promise.all([
      getImageFromString(state.settings.backgroundImage.payload),
      getImageFromString(state.settings.topLeftImage.payload),
      getImageFromString(state.settings.topCenterImage.payload),
      getImageFromString(state.settings.topRightImage.payload),
    ])

    context.clearRect(0, 0, canvas.width, canvas.height)

    if (backgroundImage) {
      canvas.width = backgroundImage.width * SCALE_FACTOR
      canvas.height = backgroundImage.height * SCALE_FACTOR
      context.imageSmoothingEnabled = false
      
      context.drawImage(
        backgroundImage,
        0,
        0,
        backgroundImage.width,
        backgroundImage.height,
        0,
        0,
        canvas.width,
        canvas.height
      )
    }
    if (topLeftImage) {
      context.drawImage(
        topLeftImage,
        0,
        0,
        topLeftImage.width,
        topLeftImage.height,
        6 * SCALE_FACTOR,
        6 * SCALE_FACTOR,
        topLeftImage.width * SCALE_FACTOR,
        topLeftImage.height * SCALE_FACTOR
      )
    }
    if (topCenterImage) {
      context.drawImage(topCenterImage, 0, 0)
    }
    if (topRightImage) {
      context.drawImage(
        topRightImage,
        0,
        0,
        topRightImage.width,
        topRightImage.height,
        canvas.width - 6 * SCALE_FACTOR - topRightImage.width * SCALE_FACTOR,
        6 * SCALE_FACTOR,
        topRightImage.width * SCALE_FACTOR,
        topRightImage.height * SCALE_FACTOR
      )
    }
  })
</script>
