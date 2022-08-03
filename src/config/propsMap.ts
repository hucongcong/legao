import { TextComponentProps } from './defaultProps'
// 将props映射成真实的组件
export type PropsToForm = {
  // 组件名
  component: string
  // 组件的value只
  value?: string
  // 组件的额外属性
  extraProps?: { [key: string]: any }
  // 当前组件的标签
  label?: string
  // 对于select和radio组件，需要指定options
  subComponent?: string
  options?: { label: string; value: any }[]
  // 用于转换初始值
  initialTransform?: (value: any) => any

  // 有些控件，不一定使用value属性，比如checked组件
  valueProp?: string
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
    label: '字号',
    initialTransform: (v: string) => parseInt(v)
  },
  lineHeight: {
    component: 'a-slider',
    extraProps: {
      min: 0,
      max: 3,
      step: 0.1
    },
    label: '行高',
    initialTransform: (value: string) => parseFloat(value)
  },
  textAlign: {
    component: 'a-radio-group',
    subComponent: 'a-radio',
    options: [
      { label: '居左', value: 'left' },
      { label: '居中', value: 'center' },
      { label: '居右', value: 'right' }
    ],
    label: '对齐'
  },
  fontFamily: {
    component: 'a-select',
    subComponent: 'a-select-option',
    options: [
      { label: '无', value: '' },
      { label: '宋体', value: '宋体' },
      { label: '黑体', value: '黑体' },
      { label: '微软雅黑', value: '微软雅黑' },
      { label: '楷体', value: '楷体' }
    ],
    label: '字体'
  }
}
