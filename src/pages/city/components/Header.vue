<template>
  <div class="head">
    <router-link to="/">
      <span class="iconfont">&#xe624;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .head
    height: $height
    line-height: $height
    background: $bgColor
    font-size: .32rem
    text-align:center
    color: #fff
    position: relative
    .iconfont
      width: .8rem
      display: block
      position: absolute
      left: 0
      top: 0
</style>
