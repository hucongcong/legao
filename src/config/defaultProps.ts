import { mapValues, without } from 'lodash-es'
// 所有组件的公共属性
export interface CommonComponentProps {
  // actions 是否跳转
  actionType: string
  url: string
  // size 组件尺寸
  height: string
  width: string
  paddingLeft: string
  paddingRight: string
  paddingTop: string
  paddingBottom: string
  // border type 边框样式
  borderStyle: string
  borderColor: string
  borderWidth: string
  borderRadius: string
  // shadow and opacity 阴影和透明度
  boxShadow: string
  opacity: string
  // position and x,y 位置
  position: string
  left: string
  top: string
  right: string
}

// 所有组件的公共属性-默认值
export const commonDefaultProps: CommonComponentProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '373px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y
  position: 'static',
  left: '0',
  top: '0',
  right: '0'
}

// 文本组件独有的属性-接口
export interface TextComponentProps extends CommonComponentProps {
  text: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  fontStyle: string
  textDecoration: string
  lineHeight: string
  textAlign: string
  color: string
  backgroundColor: string
}

// 文本组件的属性-默认值
export const textDefaultProps: TextComponentProps = {
  // basic props - font styles
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
}

// 封装函数，将默认值转换成组件的props结构
export const transfromToComponentProps = <T extends {}>(props: T) => {
  return mapValues(props, (item) => {
    return {
      type: (item as any).constructor as StringConstructor,
      default: item
    }
  })
}

export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text'
)
