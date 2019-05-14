import { Component, Vue } from 'vue-property-decorator';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let Simple = class Simple extends Vue {
    constructor() {
        super(...arguments);
        this.state = 0;
        this.routerMessage = '';
    }
    push() {
        this.state++;
    }
    mounted() {
        if (!this.$router) {
            // vue-router is not passed here
            this.routerMessage = 'Vue Router is required but not installed. \
      It could be because of double loading of the Vue library due to multiple \
      `node_modules`. Make you you linked to the `publish` directory and not the \
      library directory.';
        }
        else {
            this.routerMessage = 'Vue Router is installed. All working fine.';
        }
    }
};
Simple = __decorate([
    Component
], Simple);
var script = Simple;
//# sourceMappingURL=Simple.vue?rollup-plugin-vue=script.js.map

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticStyle: { border: "1px solid #c0c0c0" } }, [
    _c("h1", [_vm._v("I am the `Simple` component from the library")]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("h2", [_vm._v(" Reactivity test ")]),
    _vm._v("\n    " + _vm._s(_vm.state) + "\n    "),
    _c("button", { attrs: { type: "button" }, on: { click: _vm.push } }, [
      _vm._v("Don't push me")
    ]),
    _vm._v(" "),
    _c("h2", [_vm._v(" Mixin test ")]),
    _vm._v(" "),
    _c("em", [_vm._v("$myMixinProp")]),
    _vm._v(" resolves to:\n    "),
    _c("pre", [_vm._v(_vm._s(_vm.$myMixinProp))]),
    _vm._v(" "),
    _c("h2", [_vm._v(" Router test ")]),
    _vm._v(" "),
    _c("pre", [_vm._v(_vm._s(_vm.routerMessage))])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-0b400d71_0", { source: "em[data-v-0b400d71] {\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=Simple.vue.map */", map: {"version":3,"sources":["/Users/boyd/projects/tmp/rollup-demo/library/src/components/Simple.vue","Simple.vue"],"names":[],"mappings":"AAyCA;EACA,iBAAA;ACxCA;;AAEA,qCAAqC","file":"Simple.vue","sourcesContent":["<template>\n  <div style=\"border: 1px solid #c0c0c0\">\n      <h1>I am the `Simple` component from the library</h1> <br />\n      <h2> Reactivity test </h2>\n      {{ state }}\n      <button type=\"button\" v-on:click=\"push\">Don't push me</button>\n      \n      <h2> Mixin test </h2>\n      <em>$myMixinProp</em> resolves to:\n      <pre>{{ $myMixinProp }}</pre>\n      \n      <h2> Router test </h2>\n      <pre>{{routerMessage}}</pre>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { Component, Prop, Vue } from 'vue-property-decorator';\n\n@Component\nexport default class Simple extends Vue {\n  public state: number = 0;\n  public routerMessage: string = '';\n\n  public push() {\n    this.state++;\n  }\n  public mounted() {\n    if (!this.$router) {\n      // vue-router is not passed here\n      this.routerMessage = 'Vue Router is required but not installed. \\\n      It could be because of double loading of the Vue library due to multiple \\\n      `node_modules`. Make you you linked to the `publish` directory and not the \\\n      library directory.';\n    } else {\n      this.routerMessage = 'Vue Router is installed. All working fine.';\n    }\n  }\n}\n</script>\n<style lang=\"scss\" scoped>\nem {\n  font-weight: bold;\n}\n</style>\n\n","em {\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=Simple.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-0b400d71";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var Simple$1 = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

const version = '__VERSION__';
const install = (Vue) => {
    /*
     * NOTE:
     *   if you need to extend Vue contstructor, you can extend it in here.
     */
    Vue.component('simple', Simple$1);
};
const plugin = {
    install,
    version,
};
//# sourceMappingURL=index.js.map

export default plugin;
export { Simple$1 as Simple };
