<template>
  <div class="p-4">
    <div class="row mb-3">
      <div class="col-12">
        <h1>Wordpress to nuxt</h1>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DefaultView extends Vue {}
</script>

<style lang="scss" scoped>
</style>