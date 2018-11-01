<template>
  <div class="list-container" ref="wrapper">
    <div>
      <!-- 当前城市、热门城市 -->
      <div class="area hot-container">
        <div class="title">当前城市</div>
        <ul class="border-topbottom hot-list">
          <li class="border">{{this.currentCity}}</li>
        </ul>
      </div>
      <div class="area hot-container">
        <div class="title">热门城市</div>
        <ul class="border-topbottom hot-list">
          <li class="border"
            v-for="item of hotCities"
            :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        </ul>
      </div>
      <!-- 搜索城市列表 -->
      <div class="area">
        <div class="list-item" v-for="(item, key) of cities" :key="key" :ref="key">
          <div class="title">{{key}}</div>
          <ul>
            <li class="border-bottom"
                v-for="city of item"
                :key="city.id" @click="handleCityClick(city.name)">{{city.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cityList',
  computed: { // 不只可以传数组，也可以传对象进去
    ...mapState({
      currentCity: 'city' // 映射过来的值必须加引号
    })
  },
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {
    handleCityClick (city) {
    // console.log(city)
    // 派发事件给actions接收 可以不用dispatch 经过actions 可以直接通过commit实现
    //  this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    // $refs.ele 获取dom元素 ref="ele" 设置属性，解决绑定click事件失效
    this.scroll = new BScroll(this.$refs.wrapper, { click: true, tap: true })
  },
  watch: {
    letter () {
      if (this.letter) {
        const elem = this.$refs[this.letter][0]
        // console.log(this.letter)
        // console.log(elem)
        // BScroll中的方法
        this.scroll.scrollToElement(elem)
      }
    }
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
