<template>
  <canvas ref="canvasRef" class='image-rendering-pixelated mx-auto'></canvas>
</template>

<script setup lang='ts'>
  import { onMounted, onUnmounted, ref } from 'vue'

  const props = defineProps<{
    src?: HTMLCanvasElement
  }>()

  const canvasRef = ref<HTMLCanvasElement>()

  const handleAnimationFrame = () => {
    if (!props.src) return
    const canvas = canvasRef.value
    if (!canvas) return
    const context = canvas.getContext('2d')!
    const parent = canvas.parentElement!
    
    const parentAspectRatio = parent.clientWidth / parent.clientHeight
    const srcAspectRatio = props.src.width / props.src.height
    const scaleFactor = parentAspectRatio > srcAspectRatio
      ? parent.clientHeight / props.src.height
      : parent.clientWidth / props.src.width

    canvas.width = props.src.width * scaleFactor
    canvas.height = props.src.height * scaleFactor
    context.imageSmoothingEnabled = false
    context.drawImage(props.src, 0, 0, props.src.width, props.src.height, 0, 0, canvas.width, canvas.height)
  }

  const loop = () => {
    requestAnimationFrame(loop)
    handleAnimationFrame()
  }

  requestAnimationFrame(loop)
</script>