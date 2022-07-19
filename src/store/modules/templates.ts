export interface TemplateProps {
  id: number
  title: string
  coverImg: string
  author: string
  copiedCount: number
}

interface TemplatesState {
  templates: TemplateProps[]
}

import { defineStore } from 'pinia'

export default defineStore<string, TemplatesState>('templates', {
  state: () => {
    return {
      templates: [
        {
          id: 1,
          coverImg:
            'https://static.imooc-lego.com/upload-files/screenshot-889755.png',
          title: 'test title 1',
          author: 'viking',
          copiedCount: 1
        },
        {
          id: 2,
          coverImg:
            'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
          title: '前端架构师直播海报',
          author: 'viking',
          copiedCount: 1
        },
        {
          id: 3,
          coverImg:
            'https://static.imooc-lego.com/upload-files/screenshot-682056.png',
          title: '前端架构师直播海报',
          author: 'viking',
          copiedCount: 1
        },
        {
          id: 4,
          coverImg:
            'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
          title: '前端架构师直播海报',
          author: 'viking',
          copiedCount: 1
        },
        {
          id: 5,
          coverImg:
            'https://static.imooc-lego.com/upload-files/screenshot-889755.png',
          title: '前端架构师直播海报',
          author: 'viking',
          copiedCount: 1
        },
        {
          id: 6,
          coverImg:
            'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
          title: '前端架构师直播海报',
          author: 'viking',
          copiedCount: 1
        }
      ]
    }
  }
})
