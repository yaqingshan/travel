<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" value="" />
  </div>
</template>

<script>
export default {
  name: 'citySearch'
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
</style>
