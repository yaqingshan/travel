<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyval" placeholder="输入城市名或拼音" value="" />
    </div>
    <div class="search-result-list" ref="search" v-show="keyval">
      <ul>
        <li class="border-bottom"
            v-for="item of resultList"
            :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li v-show="hasNoData">没有搜寻到匹配结果</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyval: '',
      resultList: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
    // 派发事件给actions接收
    //  this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyval () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 判断keyval是否为空
      if (!this.keyval) {
        this.resultList = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.name.indexOf(this.keyval) > -1 || item.spell.indexOf(this.keyval) > -1) {
              result.push(item)
            }
          })
        }
        this.resultList = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, { click: true, tap: true })
  },
  computed: {
    hasNoData () {
      return !this.resultList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    padding: .22rem
    background: $bgColor
    input
      width: 100%
      height: .68rem
      padding: 0 .2rem
      box-sizing: border-box
      line-height: .68rem
      color: $textColor
      font-size: .28rem
      text-align: center
      border-radius: .1rem
  .search-result-list
    overflow: hidden
    position: absolute
    left: 0
    right: 0
    top: 2rem
    bottom: 0
    z-index: 44
    background: #fff
    li
      padding: .22rem
      font-size: .28rem
      color: $textColor

</style>
