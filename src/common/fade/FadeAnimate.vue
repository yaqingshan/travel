<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimate'
}
</script>

<style lang="stylus" scoped>
  .v-enter, v-leave-to
    transform: scale(0);
    opacity: 0
  .v-enter-active, .v-leave-active
    transform: scale(1.5);
    transition: opacity 1s
</style>
