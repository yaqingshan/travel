<template>
  <div class="gallery-container" @click="handleGlallery">
    <div class="wrapper">
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="item of list" :key="item.id">
            <img class="gallery-img" :src="item.url">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    list: Array,
    default () {
      return []
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true, // 监听dom结构发生变化时，自我刷新一次
        observeParents: true, // 与上一个属性一起使用，因为一开始隐藏，显示时dom反生了改变
        loop: true
      }
    }
  },
  methods: {
    handleGlallery () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallery-container >>> .swiper-container
    overflow: inherit
    width: 100%
    height: 100%
  .gallery-container
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    left: 0
    right: 0
    bottom: 0
    top: 0
    background: #000
    z-index: 22
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      position: relative
      .swiper-box
        position: absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        .swiper-slide
          display: flex
          align-items: center
          .gallery-img
            width: 100%
        .swiper-pagination
          color: #fff
          bottom: -2rem
</style>
