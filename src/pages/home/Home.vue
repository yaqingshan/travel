<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recList="recList"></home-recommend>
    <home-weekend :weekList="weekList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recList: [],
      weekList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(
        this.getInfoSucc
      )
    },
    getInfoSucc (res) {
      res = res.data
      if (res.code === 200 && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recList = data.recList
        this.weekList = data.weekList
      }
    }
  },
  // 页面每加载一次就执行一次
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 页面重新被显示的时候执行，使用keepalive后可以使用该函数
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
