import { VueConstructor, PluginObject } from 'vue';
import Simple from './components/Simple.vue';

const version = '__VERSION__';

const install = (Vue: VueConstructor): void => {
  /*
   * NOTE:
   *   if you need to extend Vue contstructor, you can extend it in here.
   */
  Vue.component('simple', Simple);

};

const plugin: PluginObject<VueConstructor> = {
  install,
  version,
};

export default plugin;

export {
  Simple,
};
