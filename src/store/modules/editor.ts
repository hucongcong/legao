import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { TextComponentProps } from '@/config/defaultProps'
export interface ComponentData {
  // 这个元素的 属性，属性请详见下面
  props: Partial<TextComponentProps>
  // id，uuid v4 生成
  id: string
  name: 'l-text' | 'l-image'
}

export const testComponents: ComponentData[] = [
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'hello',
      fontSize: '30px',
      color: '#000000',
      lineHeight: '1',
      textAlign: 'left',
      fontFamily: ''
    }
  },
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'hello2',
      fontSize: '15px',
      fontWeight: 'bold',
      color: 'red'
    }
  },
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'hello3',
      fontSize: '15px',
      actionType: 'url',
      url: 'https://www.baidu.com',
      lineHeight: '3',
      color: 'green'
    }
  }
]

export default defineStore('editor', {
  state: () => {
    return {
      money: 100,
      components: testComponents,
      currentId: ''
    }
  },
  actions: {
    addComponent(payload: Partial<TextComponentProps>) {
      this.components.push({
        id: uuidv4(),
        name: 'l-text',
        props: payload
      })
    },
    setActive(id: string) {
      this.currentId = id
    }
  },
  getters: {
    currentElement(): ComponentData | null {
      return this.components.find((item) => item.id === this.currentId) || null
    }
  }
})
