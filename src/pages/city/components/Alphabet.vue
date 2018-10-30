<template>
  <div class="alphabet">
    <ul>
      <li v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touhchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  // 数据渲染后 执行
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText)
      this.$emit('changeLetter', e.target.innerText)
    },
    handleTouchStart () {
      this.touhchStatus = true
      // console.log('开始')
    },
    handleTouchMove (e) {
      // console.log('移动')
      if (this.touhchStatus) {
        // 每次都执行，性能不好
        // const startY = this.$refs['A'][0].offsetTop
        // 设置timer 事件节流 提高性能 减少函数触发事件
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 100
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('changeLetter', this.letters[index])
            // console.log(index)
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touhchStatus = false
      console.log('结束')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .alphabet
    color: $bgColor
    width: .4rem
    text-align: center
    position: absolute
    top: 2rem
    right: 0
    bottom: 0
    z-index: 22
    ul
      width: 100%
      height: 100%
      display: flex
      flex-direction: column
      justify-content: center
      li
        line-height: .4rem
</style>
