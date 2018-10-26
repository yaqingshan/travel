<template>
  <div class="list-container">
    <!-- 当前城市、热门城市 -->
    <div class="hot-container">
      <div class="title">当前城市</div>
      <ul class="border-topbottom hot-list">
        <li class="border">北京</li>
      </ul>
    </div>
    <div class="hot-container">
      <div class="title">热门城市</div>
      <ul class="border-topbottom hot-list">
        <li class="border">北京</li>
        <li class="border">上海</li>
        <li class="border">成都</li>
      </ul>
    </div>
    <!-- 搜索城市列表 -->
    <div class="list-item">
      <div class="title">A</div>
      <ul>
        <li class="border-bottom">阿坝藏族羌族自治州</li>
        <li class="border-bottom">阿坝藏族羌族自治州</li>
        <li class="border-bottom">阿坝藏族羌族自治州</li>
      </ul>
    </div>
    <div class="list-item">
      <div class="title">A</div>
      <ul>
        <li class="border-bottom">阿坝藏族羌族自治州</li>
        <li class="border-bottom">阿坝藏族羌族自治州</li>
        <li class="border-bottom">阿坝藏族羌族自治州</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityList'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list-container
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
        width: 2.3rem;
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
        &::before
          border: 1px solid #cfcfcf;

</style>
