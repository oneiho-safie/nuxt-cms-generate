<template>
  <div>
    <div class="row mb-2">
      <div class="col-12">
        <nuxt-link :to="{ name: 'index'}">Topに戻る</nuxt-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h4 class="text-info" v-html="entry.title.rendered"></h4>
      </div>
      <div class="col-12">
        <p>{{ entry.date }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <span v-html="entry.content.rendered"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'vue-property-decorator'

@Component({
  asyncData({ $axios, params, payload }) {
    if (payload) {
      return { entry: payload }
    } else {
      return $axios.get(`https://safie.link/wp-json/wp/v2/blog/${params.id}`).then(response => {
        return { entry: response.data }
      })
    }
  }
})
export default class BlogPageView extends Vue {
  entry = null
}
</script>

<style lang="scss" scoped>
</style>
