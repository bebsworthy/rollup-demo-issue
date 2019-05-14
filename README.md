# Rollup + VueJs Library Demo

This is demo of building Vue component library with rollup.

# 📁 library

The project for `my-library`. It currently only has a single vue component `Simple`.

It generates an esm file using rollup.

**How to set it up**
```bash
yarn
yarn build
cd publish
yarn link
```

## ⚠️WARNING 

**DO NOT USE `yarn link` in the `library` directory.** 
If you do you *will* encounter all kind of mysterious issues due to the multiple `node_modules` folder on your build path. 

**USE `yarn link` in the `publish` directory instead**.

**Watch and rebuild on change**
You can use `yarn watch` (aka: rollup -c -w) to rebuild the library every time source changes.

# 📁 application

A default vue cli application project with babel, typescript, router.

You can launch the app and click on the link `External Component` at the top.

```bash
yarn
yarn link "my-library"
yarn serve
```

The modified files are :

- src/router.ts (to add a route to the `Simple` component)
- src/App.vue (to add a `router-link`)
- src/main.ts (to add a mixin `beforeCreate`)

