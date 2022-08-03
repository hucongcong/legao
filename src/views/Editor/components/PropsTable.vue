<script lang="ts" setup>
import { TextComponentProps } from '@/config/defaultProps.js'
import { computed } from '@vue/reactivity'
import { propsToForms, PropsToForms } from '@/config/propsMap'
const props = defineProps<{
  props: Partial<TextComponentProps>
}>()

const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

// 将属性转换成antd的组件
// 比如： {text: ’abc'} 转换成 {text: {component: 'a-input', value: 'abc'}}
// 需要考虑的点：不是所有的属性都会进行转换，需要转换的属性会在 propsMap中定义
const finalProps = computed(() => {
  const finalProps = {} as PropsToForms
  for (const key in props.props) {
    const k = key as keyof TextComponentProps
    if (propsToForms[k]) {
      // 如果在propsToForms中存在
      const item = propsToForms[k]!
      finalProps[k] = {
        value: item.initialTransform
          ? item.initialTransform(props.props[k])
          : props.props[k],
        valueProp: item.valueProp ? item.valueProp : 'value',
        ...item
      }
    }
  }
  return finalProps
})
</script>

<template>
  <div class="props-table">
    <div v-for="(item, index) in finalProps" :key="index" class="prop-item">
      <template v-if="item">
        <span class="label" v-if="item.label">{{ item.label }}</span>
        <div class="prop-component">
          <component
            :is="item.component"
            :value="item.value"
            v-bind="item.extraProps"
            :[item.valueProp!]="item.value"
          >
            <template v-if="item.options">
              <component
                :is="item.subComponent"
                v-for="sub in item.options"
                :value="sub.value"
                :key="sub.value"
              >
                {{ sub.label }}
              </component>
            </template>
          </component>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.prop-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.label {
  width: 28%;
}
.prop-component {
  width: 70%;
}
</style>
