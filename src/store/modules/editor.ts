import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
export interface ComponentData {
  // 这个元素的 属性，属性请详见下面
  props: { [key: string]: any }
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

interface EditorState {
  money: number
  components: ComponentData[]
  currentElement: string
}

export default defineStore<string, EditorState>('editor', {
  state: () => {
    return {
      money: 100,
      components: testComponents,
      currentElement: ''
    }
  }
})
