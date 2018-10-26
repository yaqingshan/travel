<template>
  <div class="city-container">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import cityHeader from './components/Header.vue'
import citySearch from './components/Search.vue'
import cityList from './components/List.vue'
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList
  }
}
</script>

<style lang="stylus" scoped>

</style>
