import { Widget, WidgetKeyword } from '@widget-js/core'

// TODO 修改组件信息，标题，描述，关键词
const name = 'cn.widgetjs.widgets.hotspot.bangumi'
// 组件标题
const title = { 'zh-CN': 'B站新番时间表' }
// 组件描述
const description = { 'zh-CN': '追番小助手' }
// 组件关键词
const keywords = [WidgetKeyword.RECOMMEND]
// 组件路由地址
const path = '/widget/bangumi'
// 组件关键词
const BangumiWidgetDefine = new Widget({
  name,
  title,
  description,
  keywords,
  lang: 'zh-CN',
  categories: ['news'],
  width: 4,
  height: 4,
  minWidth: 4,
  maxWidth: 6,
  minHeight: 4,
  maxHeight: 4,
  previewImage: '/images/preview_bangumi.png',
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

export default BangumiWidgetDefine
