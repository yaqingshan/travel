<template>
    <div>
      <div class="detail-banner" @click="handleShowGlallery">
        <div class="banner">
          <img :src="bannerImg" />
        </div>
        <div class="title">
          {{sightName}}
        </div>
        <div class="img-num">
          <span class="iconfont">&#xe658;</span>{{gallaryImgs.length}}
        </div>
      </div>
      <fade-animate>
        <common-gallery :list="gallaryImgs" v-show="showGallery" @close="handleHideGlallery"></common-gallery>
      </fade-animate>
    </div>
</template>

<script type="text/javascript">
import CommonGallery from 'common/gallery/Gallery.vue'
import FadeAnimate from 'common/fade/FadeAnimate.vue'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    CommonGallery,
    FadeAnimate
  },
  methods: {
    handleShowGlallery () {
      this.showGallery = true
    },
    handleHideGlallery () {
      this.showGallery = false
    }
  }

}
</script>

<style lang="stylus" scoped>
  .detail-banner
    position: relative
    color: #fff
    .banner
      width: 100%
      height: 0
      padding-bottom: 55%
      overflow: hidden
      img
        display: block
        width: 100%
    .title
      position: absolute
      left:0
      right:0
      bottom:0
      z-index: 11
      font-size: .34rem
      height: .84rem
      line-height: .84rem
      padding: 0 .2rem
      background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))
    .img-num
      width: 1.2rem
      height: .4rem
      line-height: .4rem
      border-radius: .2rem
      text-align: center
      position: absolute
      left: .2rem
      bottom: .86rem
      z-index: 11
      background: rgba(0,0,0,0.5)
      .iconfont
        font-size: .16rem
        padding-right: .1rem
</style>
