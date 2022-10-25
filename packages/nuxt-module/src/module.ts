import {
  addComponent,
  defineNuxtModule,
} from '@nuxt/kit'
import { name, version } from '../package.json'

export interface ModuleOptions {

}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'reproUi',
    compatibility: {
      nuxt: '^3.0.0-rc.12',
    },
  },
  async setup(opts, nuxt) {
    await addComponent({ name: 'GButton', export: 'GButton', filePath: '@pkg/ui' })
    nuxt.options.css.push('@pkg/ui/style.css')
  },
})
