<script lang="ts" setup></script>

<template>
  <div class="home-container">
    <a-layout :style="{ backgroundColor: '#fff' }">
      <a-layout-header class="header">
        <div class="page-title">low code</div>
      </a-layout-header>
      <a-layout-content class="home-layout">
        <RouterView></RouterView>
      </a-layout-content>
      <a-layout-footer> 趣学术～～ </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped lang="less"></style>
