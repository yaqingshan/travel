<template>
  <div class="list-container" ref="wrapper">
    <div>
      <!-- 当前城市、热门城市 -->
      <div class="area hot-container">
        <div class="title">当前城市</div>
        <ul class="border-topbottom hot-list">
          <li class="border">北京</li>
        </ul>
      </div>
      <div class="area hot-container">
        <div class="title">热门城市</div>
        <ul class="border-topbottom hot-list">
          <li class="border" v-for="item of hotCities" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <!-- 搜索城市列表 -->
      <div class="area">
        <div class="list-item" v-for="(item, key) of cities" :key="key">
          <div class="title">{{key}}</div>
          <ul>
            <li class="border-bottom" v-for="city of item" :key="city.id">{{city.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    cities: Object,
    hotCities: Array
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list-container
    position: absolute
    left: 0
    top: 2rem
    right: 0
    bottom: 0
    z-index: 22
    overflow: hidden
    font-size: .28rem
    color:$textColor
    .title
      padding: .2rem
      background: #ebebeb
    .hot-list
      width: 100%
      overflow:hidden
      height: auto
      padding-bottom: .3rem
      li
        &::before
          border: 1px solid #cfcfcf;
        float: left
        width: 2.1rem;
        margin-left: .2rem
        margin-top: .3rem
        text-align: center
        height: .58rem
        line-height: .58rem
    .list-item
      ul li
        padding: .1rem .2rem
        height: .68rem
        line-height: .68rem
        &::after
          border: 1px solid #cfcfcf;

</style>
