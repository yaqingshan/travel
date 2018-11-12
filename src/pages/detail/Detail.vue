<template>
  <div class="detail_container">
    <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailData () {
      // this.$route.params.id 获取链接上的参数id
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(
        this.getDetailSucess
      )
    },
    getDetailSucess (res) {
      res = res.data
      if (res.code === 200) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.sightName = data.sightName
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailData()
  },
  activated () {
    // 可以在这里处理keep-live生成的缓存，重新发起请求
  }
}
</script>

<style lang="stylus" scoped>

</style>
