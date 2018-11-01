<template>
  <div>
  <header>
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-mid"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}<span class="iconfont">&#xe6aa;</span></div>
    </router-link>
  </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // 从state中映射一个叫city的给计算属性中的city
    // ...mapGetters(['doubleCity']) // 使用getters
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  header
    display: flex
    height: $height
    align-items: center
    background: $bgColor
    color: #fff
    span
      padding: 0 .1rem
    .header-left
      width: .7rem
      padding-left: .1rem
      font-weight: 700
    .header-mid
      flex: 1
      height: .6rem
      line-height: .6rem
      border-radius: .06rem
      padding-left: .2rem
      background: #fff
      color: #e4e7ea
    .header-right
      padding-right: .1rem
      padding-left: .2rem
</style>
