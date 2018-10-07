<template>
  <div>
  <header>
    <div class="header-left">左</div>
    <div class="header-mid">中</div>
    <div class="header-right">右</div>
  </header>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus">
  header
    display: flex
    height: .88rem
    align-item: center
    background: #00bcd4
    color: #fff
</style>
