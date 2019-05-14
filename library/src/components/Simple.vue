<template>
  <div style="border: 1px solid #c0c0c0">
      <h1>I am the `Simple` component from the library</h1> <br />
      <h2> Reactivity test </h2>
      {{ state }}
      <button type="button" v-on:click="push">Don't push me</button>
      
      <h2> Mixin test </h2>
      <em>$myMixinProp</em> resolves to:
      <pre>{{ $myMixinProp }}</pre>
      
      <h2> Router test </h2>
      <pre>{{routerMessage}}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Simple extends Vue {
  public state: number = 0;
  public routerMessage: string = '';

  public push() {
    this.state++;
  }
  public mounted() {
    if (!this.$router) {
      // vue-router is not passed here
      this.routerMessage = 'Vue Router is required but not installed. \
      It could be because of double loading of the Vue library due to multiple \
      `node_modules`. Make you you linked to the `publish` directory and not the \
      library directory.';
    } else {
      this.routerMessage = 'Vue Router is installed. All working fine.';
    }
  }
}
</script>
<style lang="scss" scoped>
em {
  font-weight: bold;
}
</style>

