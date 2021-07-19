<template>
  <Section class="flex flex-row items-center justify-around" label="Share">
    <Button label="Import" icon="import" @click="handleImport" />
    <Button label="Export" icon="export" @click="handleExport" />
    <!-- <button
      class="flex flex-row gap-1 items-center min-w-max p-2 border-2 rounded x-focus"
      @click="handleGenerate"
    >
      <img src="/assets/icon-image-download.svg" class="h-5 inline" aria-hidden />
      <span class="align-middle">Generate</span>
    </button> -->
  </Section>
</template>

<script setup lang="ts">
  import Button from '../components/Button.vue'
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
    const filename = `victorum-cards-${
      new Date().getFullYear()
    }${
      new Date().getMonth().toString().padStart(2, '0')
    }${
      new Date().getDate().toString().padStart(2, '0')
    }.json`
    shareExport(filename, JSON.stringify(state, null, 2), 'application/json')
  }
</script>
