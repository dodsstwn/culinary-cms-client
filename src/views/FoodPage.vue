<template>
  <div id="food-page" style="min-height: 100vh; width: 100%; background-color: #FFFFFF;">
    <!-- FOOD NAVBAR -->
    <FoodNavbar></FoodNavbar>
    <!-- FOOD NAVBAR -->
    <div class="row p-0 m-0" style="min-height: 92vh; width: 100%;">
      <!-- CONTENT BAR -->
      <div class="col-12 p-0 d-flex flex-column justify-content-center align-items-center" style="background-color: #FEFEFE;">
        <div class="mt-4" style="overflow-x: hidden;">
          <h1 style="font-family: 'Euclid'; text-align: center;"> Indonesia Barat </h1>
          <div class="row d-flex flex-row justify-content-center align-items-center">
            <FoodCard v-for="item in filteredFetchBarat" :key="item.id" :item="item"></FoodCard>
          </div>
        </div>
        <div style="overflow-x: hidden;">
          <h1 style="font-family: 'Euclid'; text-align: center;"> Indonesia Tengah </h1>
          <div class="row d-flex flex-row justify-content-center align-items-center">
            <FoodCard v-for="item in filteredFetchTengah" :key="item.id" :item="item"></FoodCard>
          </div>
        </div>
        <div style="overflow-x: hidden;">
          <h1 style="font-family: 'Euclid'; text-align: center;"> Indonesia Timur </h1>
          <div class="row d-flex flex-row justify-content-center align-items-center">
            <FoodCard v-for="item in filteredFetchTimur" :key="item.id" :item="item"></FoodCard>
          </div>
        </div>
      </div>
      <!-- CONTENT BAR -->
    </div>
    <RedStrip></RedStrip>
  </div>
</template>

<script>
import FoodCard from '../components/FoodCard'
import FoodNavbar from '../components/FoodNavbar'
import router from '../router'
import RedStrip from '../components/RedStrip'
import { mapState } from 'vuex'

export default {
  name: 'FoodPage',
  components: {
    FoodNavbar,
    FoodCard,
    RedStrip
  },
  computed: {
    ...mapState(['fetchFood']),
    filteredFetchBarat () {
      const fetchDataBarat = this.fetchFood.filter(el => {
        return el.name === 'Indonesia Barat'
      })
      return fetchDataBarat
    },
    filteredFetchTengah () {
      const fetchDataTengah = this.fetchFood.filter(el => {
        return el.name === 'Indonesia Tengah'
      })
      return fetchDataTengah
    },
    filteredFetchTimur () {
      const fetchDataTimur = this.fetchFood.filter(el => {
        return el.name === 'Indonesia Timur'
      })
      return fetchDataTimur
    }
  },
  methods: {
    fetchFoods () {
      this.$store.dispatch('fetchFoods')
    },
    checkLocalStorage () {
      if (!localStorage.getItem('access_token')) {
        router.push('/')
      }
    }
  },
  created () {
    this.fetchFoods()
    this.checkLocalStorage()
  }
}
</script>

<style>

</style>
