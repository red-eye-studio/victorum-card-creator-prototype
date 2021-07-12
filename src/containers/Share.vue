<template>
  <Section class='flex flex-row items-center justify-around' label='Share'>
    <button class='px-4 py-2 border-2 rounded' @click='handleImport'>
      <img src='/assets/icon-import.svg' class='h-5 mr-2 inline' />
      <span class='align-middle'>Import</span>
    </button>
    <button class='px-4 py-2 border-2 rounded' @click='handleExport'>
      <img src='/assets/icon-export.svg' class='h-5 mr-2 inline' />
      <span class='align-middle'>Export</span>
    </button>
  </Section>
</template>

<script setup lang='ts'>
  import Section from '../components/Section.vue'
  import { shareImport } from '../utilities/share'

  const handleImport = () => {
    shareImport()
      .then(console.log)
  }

  const handleExport = () => {

  }
</script>