import { App } from 'vue'
import '@astra/style'
import Button from '@astra/components/button'

const components = [Button]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export default {
  install
}
