<template>
  <div id="beverage-page" style="min-height: 100vh; width: 100%; background-color: #FFFFFF;">
    <!-- BEVERAGE NAVBAR -->
    <BeverageNavbar></BeverageNavbar>
    <!-- BEVERAGE NAVBAR -->
    <div class="col-12 p-0 d-flex flex-column justify-content-center align-items-center" style="background-color: #FEFEFE;">
        <div class="mt-4" style="overflow-x: hidden;">
          <h1 style="font-family: 'Euclid'; text-align: center;"> Beverage </h1>
          <div class="row d-flex flex-row justify-content-center align-items-center">
            <BeverageCard></BeverageCard>
          </div>
        </div>
    </div>
    <RedStrip></RedStrip>
  </div>
</template>

<script>
import BeverageNavbar from '../components/BeverageNavbar'
import BeverageCard from '../components/BeverageCard'
import RedStrip from '../components/RedStrip'
import router from '../router'
import { mapState } from 'vuex'

export default {
  name: 'BeveragePage',
  components: {
    BeverageNavbar,
    BeverageCard,
    RedStrip
  },
  computed: {
    ...mapState(['fetchBeverage'])
  },
  methods: {
    fetchBeverages () {
      this.$store.dispatch('fetchBeverages')
    },
    checkLocalStorage () {
      if (!localStorage.getItem('access_token')) {
        router.push('/')
      }
    }
  },
  created () {
    this.fetchBeverages()
    this.checkLocalStorage()
  }
}
</script>

<style>

</style>
