<template>
  <div class="detail-header">
    <router-link to="/" tag="div" class="back" v-show="!showHead">
      <span class="iconfont">&#xe624;</span>
    </router-link>
    <div class="head" v-show="showHead" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont">&#xe624;</span>
      </router-link>
    故宫
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHead: false,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log('scorll')
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showHead = true
      } else {
        this.showHead = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll) // 会影响全局事件,当前为window的全局scroll事件
  },
  // 解决方法 对全局事件的解绑
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
  .back
    width: .72rem
    height: .72rem
    line-height: .72rem
    border-radius: 50%
    background: rgba(0, 0, 0, .5)
    text-align: center
    font-size: .36rem
    font-weight: 700
    color: #fff
    position: fixed
    left: .1rem
    top: .1rem
    z-index: 23
  .head
    height: $height
    line-height: $height
    background: $bgColor
    font-size: .36rem
    text-align:center
    color: #fff
    position: fixed
    left: 0
    top: 0
    right: 0
    z-index: 23
    .iconfont
      width: .8rem
      font-weight: 700
      display: block
      position: absolute
      left: 0
      top: 0
</style>
