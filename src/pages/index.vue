<template>
  <div class="">

    <div class="row mb-3">
      <div class="col-12">
        <h5>Safie Blog</h5>
      </div>
      <div class="col-12" v-for="(item, index) in blogPosts" :key="index">
        <nuxt-link :to="{ name: 'blog-id', params: { id: item.id } }">{{ item.title.rendered }}</nuxt-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h5>Agencyマニュアル 1.1</h5>
      </div>
      <div class="col-12" v-for="(item, index) in manualPosts" :key="index">
        <nuxt-link :to="{ name: 'manual-id', params: { id: item.id } }">{{ item.title.rendered }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component({
  asyncData({ $axios, payload }) {
    return Promise.all([
      $axios.get('https://safie.link/wp-json/wp/v2/blog'),
      $axios.get('https://safie.link/manual/wp-json/wp/v2/posts'),
    ]).then(response => {
      return {
        blogPosts: response[0].data,
        manualPosts: response[1].data
      }
    })
  }
})
export default class IndexView extends Vue {
  blogPosts = []
  manualPosts = []

  testAction() {
  }
}
</script>

<style lang="scss" scoped>
</style>
