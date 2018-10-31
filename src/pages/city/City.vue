<template>
  <div class="city-container">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @changeLetter="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import cityHeader from './components/Header.vue'
import citySearch from './components/Search.vue'
import cityList from './components/List.vue'
import cityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityData () {
      axios.get('/api/city.json').then(
        this.getCitySuccess
      )
    },
    getCitySuccess (res) {
      res = res.data
      if (res.code === 200 && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      // console.log(letter)
      this.letter = letter
    }
  },
  mounted () {
    this.getCityData()
  }
}
</script>

<style lang="stylus" scoped>

</style>
