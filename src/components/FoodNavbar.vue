<template>
  <div>
    <!-- FOOD NAVBAR -->
    <nav class="navbar navbar-expand-lg shadow-sm" style="background-color: #F48C06; min-height: 63px;">
      <div class="container p-0">
        <a class="navbar-brand m-0 p-0 d-flex flex-column justify-content-start align-items-start" href="#" style="width: 20%;"><img src="/img/c-logo.png" alt="logo-kanban" style="width: 45%;" @click.prevent="changePageHome()"></a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a id="btn-add" class="nav-link" style="font-family: Louis George Café; color: #FFFFFF; font-size: 14pt; margin-right: 5pt;" @click.prevent="changePageBeverage()">Beverages</a>
            </li>
            <li class="nav-item">
              <a id="btn-add" class="nav-link" style="font-family: Louis George Café; color: #FFFFFF; font-size: 14pt;" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Foods</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="font-family: 'Louis'; color: #FFFFFF; font-size: 14pt; margin-left: 2pt;">
                {{ emailUser }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item nav-link" href="#" style="font-family: Louis George Café; color: #000000; font-size: 12pt; margin-left: 5px;" @click.prevent="logout()">Sign Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- FOOD NAVBAR -->
    <AddFoodModal></AddFoodModal>
  </div>
</template>

<script>
import AddFoodModal from '../components/AddFoodModal'
import router from '../router'
import { mapState } from 'vuex'

export default {
  name: 'FoodNavbar',
  components: {
    AddFoodModal
  },
  data () {
    return {
      emailUser: ''
    }
  },
  mounted () {
    if (localStorage.email) {
      this.emailUser = localStorage.email
    }
  },
  computed: {
    ...mapState(['userEmail'])
  },
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      router.push('/')
    },
    changePageHome () {
      router.push('/content')
    },
    changePageBeverage () {
      router.push('/beverage')
    }
  }

}
</script>

<style>

</style>
