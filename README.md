# VueJs Library Demo

This is a non working attempt at building a VueJs component library.


## library

The library projects. It generates an esm file using rollup.
It currently only has a single component `Simple` which only purpose is to demonstrate the issue.

```
yarn
yarn build
yarn link
```

## application

A default vue cli application project with babel, typescript, router.

You can launch the app and click on the link `problem` at the top.

```
yarn
yarn link "my-library"
yarn serve
```

The modified files are :

- src/router.ts (to add a route to the `Simple` component)
- src/App.vue (to add a `router-link`)
- src/maint.ts (to add a mixin `beforeCreate`)


##  What's broken

- $router ($route, etc...) is not available on the `Simple` component.
- The mixins are not executed on the Simple component. (which explains the above, since the vue-router mixin 'beforeCreate' is not executed for that component)
- The Simple component is invisible to Vue dev tool.
- Probably other things...

