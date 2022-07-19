<script lang="ts">
import { defineComponent } from 'vue'
import { pick } from 'lodash-es'
import {
  transfromToComponentProps,
  textDefaultProps,
  textStylePropNames
} from '@/config/defaultProps'
import { computed } from '@vue/reactivity'
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
    const styleProps = computed(() => {
      return pick(props, textStylePropNames)
    })
    return {
      styleProps
    }
  }
})
</script>

<template>
  <div class="l-text">
    <!-- 文本组件 -->
    <component :is="tag" class="l-text-component" :style="styleProps">{{
      text
    }}</component>
  </div>
</template>

<style scoped lang="less"></style>
