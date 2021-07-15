<template>
  <Section class='flex flex-row items-center justify-around' label='Share'>
    <button class='flex flex-row gap-1 items-center min-w-max p-2 border-2 rounded' @click='handleImport'>
      <img src='/assets/icon-import.svg' class='h-5 inline' />
      <span class='align-middle'>Import</span>
    </button>
    <button class='flex flex-row gap-1 items-center min-w-max p-2 border-2 rounded' @click='handleExport'>
      <img src='/assets/icon-export.svg' class='h-5 inline' />
      <span class='align-middle'>Export</span>
    </button>
    <button class='flex flex-row gap-1 items-center min-w-max p-2 border-2 rounded' @click='handleSave'>
      <img src='/assets/icon-save.svg' class='h-5 inline' />
      <span class='align-middle'>Save</span>
    </button>
  </Section>
</template>

<script setup lang='ts'>
  import Section from '../components/Section.vue'
  import { state } from '../state'
  import { shareExport, shareImport } from '../utilities/share'

  const handleImport = async () => {
    const file = await shareImport('application/json')
    const text = await file.text()
    const json = JSON.parse(text) 

    Object.assign(state, json)
  }
  const handleExport = () => {
    const date = new Date()
    const filename = `victorum-cards-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.json`
    const content = JSON.stringify(state, null, 2)

    shareExport(filename, content, 'application/json')
  }
  const handleSave = () => {
    console.log('handleSave')
  }
</script>