<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="list-item border-bottom" v-for="item of weekList" :key="item.id">
        <div class="item-img">
          <img :src="item.src">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-subtitile">{{item.subtitle}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    weekList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .recommend
    margin-top: 0.2rem
    color: $textColor
    .title
      height: .44rem
      line-height: .44rem
      background: #f5f5f5
      padding: 0.32rem
    .list-item
      background: #fff
      .item-img
        height: 0
        overflow: hidden
        padding-bottom: 37.1%
        img
          display: block
          width: 100%
      .item-info
        padding: .2rem
        font-size: .32rem
        .item-title
          font-size: .28rem
          font-weight: 500
          padding-bottom: .2rem
          ellipsis()
        .item-subtitile
          font-size: .24rem
          ellipsis()
</style>
