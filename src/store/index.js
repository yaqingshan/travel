import Vue from 'vue'
import Vuex from 'vuex'
// 拆分为单独文件，方便管理
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
// localStorage 写入都本地缓存中
// try catch 防止localstorage 捕获异常

export default new Vuex.Store({
  state, // 键值一样可以简写
  actions: {
    // changeCity (ctx, city) {
    // //  console.log(city)
    //   ctx.commit('changeCity', city)
    // } 可以不经过actions
  },
  mutations,
  getters: { // 类似于computed属性 可以进行一些计算避免数据冗余 使用时方法同mutations 现在页面引入mapGetters
    doubleCity (sate) {
      return sate.city + ' ' + sate.city
    }
  }
})
