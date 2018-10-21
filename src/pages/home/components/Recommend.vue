<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <ul>
      <li class="list-item border-bottom" v-for="item of recList" :key="item.id">
        <div class="item-img">
          <img :src="item.src">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-price"><span>￥{{item.price}}</span>起</p>
          <a href="javascript" class="look-detail">查看详情</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recList: Array
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
      padding: .2rem
      background: #fff
      display: flex
      align-items: center
      .item-img
        width: 2rem
        height: 2rem
        img
          display: block
          width: 100%
          height: 100%
      .item-info
        padding-left: .22rem
        font-size: .32rem
        .item-title
          padding-bottom: .2rem
          ellipsis()
        .item-price
          padding-bottom: .2rem
          span
            font-size: .4rem
            padding-right: .1rem
            color: #ff8300
        .look-detail
          display: block
          width: 1.6rem
          text-align: center
          border-radius: .1rem
          height: .6rem
          line-height: .6rem
          background: $bgColor
          color: #fff
</style>
