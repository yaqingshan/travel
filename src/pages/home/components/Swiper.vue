<template>
  <div class="swiper-box">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: 1,
        url: 'http://img1.qunarzz.com/piao/fusion/1809/87/534cf2e0a71fff02.jpg_750x200_5c778719.jpg'
      },
      {
        id: 2,
        url: 'http://img1.qunarzz.com/piao/fusion/1801/6f/3bf4c3ba2864d602.jpg_750x200_2881def8.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 穿透样式
  .swiper-box >>> .swiper-pagination-bullet-active
    background: #fff !important
  .swiper-box
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 26.7%
    background: #cfcfcf
    .swiper-img
      width: 100%
</style>
