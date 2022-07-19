<script lang="ts">
import LText from '@/components/LText.vue'
import { defineComponent } from 'vue'
import useStore from '@/store'
import { ComponentData } from '@/store/modules/editor'
export default defineComponent({
  name: 'ComponentList',
  components: {
    LText
  },
  emits: ['onItemClick'],
  setup(props, context) {
    const { editor } = useStore()
    const onItemClick = (item: ComponentData) => {
      console.log('item click ...', item)
      // 组件自己不处理，交给编辑器处理
      context.emit
    }
    return {
      components: editor.components,
      onItemClick
    }
  }
})
</script>

<template>
  <div>
    <div v-for="item in components" :key="item.id" @click="onItemClick(item)">
      <component :is="item.name" v-bind="item.props"></component>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
