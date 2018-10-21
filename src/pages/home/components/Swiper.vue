<template>
  <div class="swiper-box">
    <swiper :options="swiperOption" v-if="getLength">
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
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 1500
      }
    }
  },
  computed: {
    getLength () {
      return this.swiperList.length
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
