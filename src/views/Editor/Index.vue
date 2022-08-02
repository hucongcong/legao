<script lang="ts">
import ComponentList from './components/ComponentList.vue'
import useStore from '@/store'
import LText from '@/components/LText.vue'
import { defineComponent } from 'vue'
import EditorWrapper from './components/EditorWrapper.vue'
import PropsTable from './components/PropsTable.vue'
export default defineComponent({
  name: 'Editor',
  components: {
    LText,
    ComponentList,
    EditorWrapper,
    PropsTable
  },
  setup() {
    const { editor } = useStore()
    const onItemClick = (item: any) => {
      // console.log('哈哈')
      editor.addComponent(item)
    }

    const setActive = (id: string) => {
      editor.setActive(id)
    }
    return {
      editor,
      onItemClick,
      setActive
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
            <EditorWrapper
              :id="item.id"
              :key="item.id"
              v-for="item in editor.components"
              @setActive="setActive"
              :active="item.id === editor.currentId"
            >
              <component :is="item.name" v-bind="item.props"></component>
            </EditorWrapper>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider
        width="300"
        style="background: #fff"
        class="settings-panel"
      >
        <h3>组件属性</h3>
        <PropsTable
          v-if="editor.currentElement"
          :props="editor.currentElement.props"
        ></PropsTable>
        <pre>
          {{ editor.currentElement?.props }}
        </pre>
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

.settings-panel {
  padding: 10px;
}
</style>
