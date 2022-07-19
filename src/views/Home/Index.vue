<script lang="ts" setup>
import TemplateList from './components/TemplateList.vue'

import useStore from '../../store'

const { editor } = useStore()
</script>

<template>
  <div class="content-container">
    <TemplateList :list="editor.components"></TemplateList>
  </div>
</template>

<style lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-title {
  color: #fff;
}

.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>
