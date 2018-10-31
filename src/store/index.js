import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    // changeCity (ctx, city) {
    // //  console.log(city)
    //   ctx.commit('changeCity', city)
    // } 可以不经过actions
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
