<template>
  <div class="list">
    <ul>
      <li v-for="item of list" :key="item.id">
          {{item.title}}
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
</style>
