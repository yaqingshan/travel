<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="list-item border-bottom" v-for="item of recList" :key="item.id">
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
  data () {
    return {
      recList: [{id: 1, title: '北京野生动物园', src: 'http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg', subtitle: '山顶满眼彩色，此情此景醉了'
      }, {id: 2, title: '北京必游TOP10', src: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg', subtitle: '来北京必去的景点非这些地方莫属'
      }, {id: 3, title: '寻找北京的皇城范儿', src: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg', subtitle: '数百年的宫廷庙宇，至今依旧威严霸气'
      }, {id: 4, title: '学生最爱的博物馆', src: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg', subtitle: '周末干嘛？北京很多博物馆已经免费开放啦'
      }, {id: 5, title: '儿童剧场，孩子的乐园', src: 'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg', subtitle: '带宝贝观看演出，近距离体验艺术的无穷魅力'
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
      background: #fff
      .item-img
        height: 0
        overflow: hidden
        padding-bottom: 33.4%
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
