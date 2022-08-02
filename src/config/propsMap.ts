import { TextComponentProps } from './defaultProps'
// 将props映射成真实的组件
export type PropsToForm = {
  component: string
  value?: string
  extraProps?: { [key: string]: any }
  label?: string
}

export type PropsToForms = {
  [k in keyof TextComponentProps]?: PropsToForm
}

export const propsToForms: PropsToForms = {
  // 单行文本
  text: {
    component: 'a-textarea',
    extraProps: {
      rows: 3
    },
    label: '文本'
  },
  fontSize: {
    component: 'a-input-number',
    label: '字号'
  },
  lineHeight: {
    component: 'a-slider',
    extraProps: {
      min: 0,
      max: 3,
      step: 0.1
    },
    label: '行高'
  }
}
