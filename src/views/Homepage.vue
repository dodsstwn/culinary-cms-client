<template>
  <div>
    <!-- NAVBAR -->
      <Navbar></Navbar>
    <!-- NAVBAR -->
    <GreetingBanner></GreetingBanner>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import GreetingBanner from '../components/GreetingBanner.vue'
import router from '../router'

export default {
  name: 'Homepage',
  components: { Navbar, GreetingBanner },
  methods: {
    checkLocalStorage () {
      if (!localStorage.getItem('access_token')) {
        router.push('/')
      }
    }
  },
  created () {
    this.checkLocalStorage()
  }
}
</script>

<style>

</style>
