<template>
    <div>
      <div class="detail-banner" @click="handleShowGlallery">
        <div class="banner">
          <img src="http://img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_600x330_38a5c69c.jpg" />
        </div>
        <div class="title">
          峨眉山(AAAAA景区)
        </div>
        <div class="img-num">
          <span class="iconfont">&#xe658;</span>23
        </div>
      </div>
      <common-gallery :list="list" v-show="showGallery" @close="handleHideGlallery"></common-gallery>
    </div>
</template>

<script type="text/javascript">
import CommonGallery from 'common/gallery/Gallery.vue'
export default {
  name: 'DetailBanner',
  data () {
    return {
      list: [{
        id: 1,
        url: 'http://img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_r_800x800_dd060a69.jpg'
      }, {
        id: 2,
        url: 'http://img1.qunarzz.com/sight/p0/1712/2f/2fde369d83e19a8ba3.img.jpg_r_800x800_f300c3cd.jpg'
      }],
      showGallery: false
    }
  },
  components: {
    CommonGallery
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
