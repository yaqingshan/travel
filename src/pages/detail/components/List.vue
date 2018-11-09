<template>
  <div class="list">
    <ul>
      <li v-for="item of list" :key="item.id">
          <div class="info border-bottom">
            <span class="icon"></span>
            {{item.title}}
          </div>
          <div class="sec" v-if="item.children">
            <detail-list :list="item.children"></detail-list>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .sec
    padding: 0 .2rem
  .list
    li
      font-size: .32rem
      background: #fff
      .info
        padding: .2rem 0
        display: flex
        align-items: center
        &:before
          border-color: rgba(0,0,0,0.25)
        .icon
          display: block
          margin: 0 .2rem
          width: .36rem
          height: .36rem
          background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
          background-size: .4rem 3rem
</style>
