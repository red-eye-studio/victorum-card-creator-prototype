<template>
  <menu class='m-0 p-4 h-full w-96 flex flex-col gap-4 flex-shrink-0'>
    <Logo />
    <CardList />
    <Share />
  </menu>
  <Card />
  <main class='flex flex-col p-4 gap-4 flex-shrink-0'>
    <Settings />
    <Editor />
  </main>
</template>

<script setup lang="ts">
  import Card from './containers/Card.vue'
  import CardList from './containers/CardList.vue'
  import Editor from './containers/Editor.vue'
  import Logo from './components/Logo.vue'
  import Settings from './containers/Settings.vue'
  import Share from './containers/Share.vue'
</script>
