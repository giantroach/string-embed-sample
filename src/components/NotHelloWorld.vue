<template>
  <div class="not-hello">
    <h1>__PLACEHOLDER__</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class NotHelloWorld extends Vue {
  public msg = window.EMBED_MSG;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
  color: blue;
}
</style>
