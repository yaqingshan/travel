<template>
  <div class="alphabet">
    <ul>
      <li v-for="(item, key) of cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
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
