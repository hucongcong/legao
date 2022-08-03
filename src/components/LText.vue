<script lang="ts">
import { defineComponent } from 'vue'
// 获取文本组件所有的props
import {
  textDefaultProps,
  textStylePropNames,
  transfromToComponentProps
} from '@/config/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

// 获取文本组件的默认props
const defaultProps = transfromToComponentProps(textDefaultProps)
export default defineComponent({
  name: 'LText',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    ...defaultProps
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropNames
    )
    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<template>
  <div class="l-text">
    <!-- 文本组件 -->
    <component
      :is="tag"
      class="l-text-component"
      :style="styleProps"
      @click="handleClick"
    >
      {{ text }}
    </component>
  </div>
</template>

<style scoped lang="less">
.l-text {
  width: 100%;
}
</style>
