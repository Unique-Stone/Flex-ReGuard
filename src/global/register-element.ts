import { App } from 'vue'
import { ElButton, ElForm } from 'element-plus'
const components = [ElButton, ElForm]

export default function register(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
