<script lang="ts">
import ComponentList from './components/ComponentList.vue'
import useStore from '@/store'
import LText from '@/components/LText.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Editor',
  components: {
    LText,
    ComponentList
  },
  setup() {
    const { editor } = useStore()
    const onItemClick = (item: any) => {
      // console.log('哈哈')
      editor.addComponent(item)
    }
    return {
      editor,
      onItemClick
    }
  }
})
</script>

<template>
  <div class="editor-container">
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <div class="sidebar-container">组件列表</div>
        <div>
          <ComponentList @onItemClick="onItemClick"></ComponentList>
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          <p>画布区域</p>
          <div class="preview-list" id="canvas-area">
            <component
              v-for="item in editor.components"
              :key="item.id"
              :is="item.name"
              v-bind="item.props"
            ></component>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider
        width="300"
        style="background: #fff"
        class="settings-panel"
      >
        组件属性
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<style>
.editor-container .preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.editor-container .preview-list {
  padding: 0;
  margin: 0;
  min-width: 500px;
  min-height: 400px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
}
</style>
