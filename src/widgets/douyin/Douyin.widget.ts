import { Widget, WidgetKeyword } from '@widget-js/core'

const name = 'cn.widgetjs.widgets.hotspot.douyin'
// 组件标题
const title = { 'zh-CN': '抖音热榜' }
// 组件描述
const description = { 'zh-CN': '抖音热榜' }
// 组件关键词
const keywords = [WidgetKeyword.RECOMMEND]
// 组件路由地址
const path = '/widget/douyin'
// 组件关键词
const DouyinWidgetDefine = new Widget({
  name,
  title,
  description,
  keywords,
  categories: ['news'],
  lang: 'zh-CN',
  width: 4,
  height: 3,
  previewImage: '/images/preview_douyin.png',
  minWidth: 4,
  maxWidth: 6,
  minHeight: 3,
  maxHeight: 6,
  path,
  routes: [
    {
      url: path,
      name: 'index',
    },
  ],
  socialLinks: [
    { name: 'github', link: 'https://github.com/widget-js/hotspot' },
  ],
})

export default DouyinWidgetDefine
