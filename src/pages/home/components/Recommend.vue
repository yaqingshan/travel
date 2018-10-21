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
  data () {
    return {
      recList: [{id: 1, title: '北京野生动物园', src: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg', price: 70.1
      }, {id: 2, title: '故宫', src: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg', price: 20
      }, {id: 3, title: '北京欢乐谷', src: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg', price: 39.9
      }, {id: 4, title: '古北水镇', src: 'http://img1.qunarzz.com/sight/p0/1712/c2/c2d6eb9c771a3df3a3.img.jpg_200x200_3585386c.jpg', price: 150
      }, {id: 5, title: '什刹海', src: 'http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_200x200_3165123d.jpg', price: 9.9
      }]
    }
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
