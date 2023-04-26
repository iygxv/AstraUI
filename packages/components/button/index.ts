import { App } from 'vue'
import Button from './src/button.vue'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

type IWithInstall<T> = T 
const astraButton: IWithInstall<typeof Button> = Button

export default astraButton
