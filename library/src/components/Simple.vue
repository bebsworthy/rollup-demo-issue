<template>
  <div style="border: 1px solid red">
      I am the `Simple` component from the library <br />
      {{ state }}
      <button type="button" v-on:click="push">push</button>
      <hr />
      $router resolves to "{{ $router }}"
      <hr />
      $myMixinProp resolves to "{{ $myMixinProp }}"
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Simple extends Vue {
  public state: number = 0;

  public push() {
    this.state++;
  }
  public mounted() {
    if (!this.$router) {
      // vue-router is not passed here
      console.error('[Simple] Vue Router is required but not installed');
      return;
    }
  }
}
</script>
