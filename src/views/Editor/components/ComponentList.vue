<script lang="ts">
import LText from '@/components/LText.vue'
import { defineComponent } from 'vue'
import useStore from '@/store'
import { defaultTextTemplates } from '@/config/defaultTemplates'
import { TextComponentProps } from '@/config/defaultProps'
export default defineComponent({
  name: 'ComponentList',
  components: {
    LText
  },
  emits: ['onItemClick'],
  setup(props, context) {
    const { editor } = useStore()
    const onItemClick = (item: Partial<TextComponentProps>) => {
      context.emit('onItemClick', item)
    }
    return {
      components: editor.components,
      onItemClick,
      defaultTextTemplates
    }
  }
})
</script>

<template>
  <div>
    <!-- 左侧组件列表 -->
    <div
      v-for="(item, index) in defaultTextTemplates"
      :key="index"
      @click="onItemClick(item)"
    >
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
