import { createApp } from 'vue'
import { WidgetJsPlugin } from '@widget-js/vue3'
import dayjs from 'dayjs'
import App from './App.vue'
import router from './router'
import '@widget-js/vue3/dist/style.css'
import '@widget-js/vue3/dist/mingcute_icon/MingCute.css'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
createApp(App).use(WidgetJsPlugin).use(router).mount('body')
