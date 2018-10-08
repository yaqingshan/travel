<template>
  <div>
  <header>
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-mid"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">南京<span class="iconfont">&#xe6aa;</span></div>
  </header>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus">
  header
    display: flex
    height: .88rem
    align-items: center
    background: #00bcd4
    color: #fff
    span
      padding: 0 .1rem
    .header-left
      width: .6rem
    .header-mid
      flex: 1
      height: .6rem
      line-height: .6rem
      border-radius: .06rem
      padding-left: .2rem
      background: #fff
      color: #e4e7ea
    .header-right
      padding: 0 .22rem
</style>
