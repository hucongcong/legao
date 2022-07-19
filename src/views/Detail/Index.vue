<script lang="ts" setup>
import useStore from '@/store'
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'

const route = useRoute()
const { template } = useStore()
const currentTemplate = computed(() => {
  const id = parseInt(route.params.id as string)
  return template.templates.find((item) => item.id === id)
})
</script>

<template>
  <div class="work-detail-container">
    <a-row type="flex" justify="center" v-if="currentTemplate">
      <a-col :span="8" class="cover-img">
        <img :src="currentTemplate.coverImg" alt="" />
      </a-col>
      <a-col :span="8">
        <h2>{{ currentTemplate.title }}</h2>
        <p>{{ currentTemplate.title }}</p>
        <div class="author">
          该模版由 <b>{{ currentTemplate.author }}</b> 创作
        </div>
        <div class="bar-code-area">
          <span>扫一扫，手机预览</span>
          <div ref="container"></div>
        </div>
        <div class="use-button">
          <RouterLink to="/editor">
            <a-button type="primary" size="large"> 使用模版 </a-button>
          </RouterLink>
          <a-button size="large"> 下载图片海报 </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.work-detail-container {
  margin-top: 50px;
}
.cover-img {
  margin-right: 30px;
}
.cover-img img {
  width: 100%;
}
.use-button {
  margin: 30px 0;
}
.ant-avatar {
  margin-right: 10px;
}
.bar-code-area {
  margin: 20px 0;
}
</style>
