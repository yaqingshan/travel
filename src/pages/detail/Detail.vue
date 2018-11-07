<template>
  <div class="detail_container">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        id: 1000,
        title: '一级标题1',
        children: [{
          id: 10001,
          title: '二级标题1',
          children: [{
            id: 100011,
            title: '三级标题1'
          }, {
            id: 100012,
            title: '三级标题2'
          }]
        }, {
          id: 10002,
          title: '二级标题2'
        }]
      }, {
        id: 2000,
        title: '一级标题2'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
