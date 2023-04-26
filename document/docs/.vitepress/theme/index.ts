// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import './style.css'

// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

// 组件库
import astraUI from 'astra-ui'

export default {
  ...Theme,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)

    app.use(astraUI)
  }
}
