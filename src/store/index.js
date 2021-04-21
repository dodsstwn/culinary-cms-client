import axios from '../axios/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchFood: [],
    fetchBeverage: [],
    dataFindOne: [],
    userEmail: localStorage.getItem('email')
  },
  mutations: {
    insertFoods (state, payload) {
      state.fetchFood = payload
    },
    insertDataFindOne (state, payload) {
      state.dataFindOne = payload
    },
    insertBeverages (state, payload) {
      state.fetchBeverage = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'user/signIn',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          if (data) {
            localStorage.access_token = data.access_token
            localStorage.email = data.email
            localStorage.name = data.name
            router.push('/content')
          } else {
            router.push('/')
          }
        })
        .catch(err => {
          if (err.message === 'Request failed with status code 400') {
            Swal.fire({
              icon: 'error',
              title: 'Please, stop it!',
              text: "You don't have permission to access this app! Check your combination of email and password."
            })
          }
        })
        .then(() => {
          this.email = ''
          this.password = ''
        })
    },
    addFoods (context, payload) {
      return axios({
        method: 'POST',
        url: 'foods',
        headers: { access_token: localStorage.access_token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.category
        }
      })
        .then(response => {
          context.dispatch('fetchFoods')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBeverages (context, payload) {
      return axios({
        method: 'POST',
        url: 'beverages',
        headers: { access_token: localStorage.access_token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(response => {
          context.dispatch('fetchBeverages')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchFoods (context, payload) {
      axios({
        method: 'GET',
        url: 'foods',
        headers: { access_token: localStorage.access_token }
      })
        .then(response => {
          context.commit('insertFoods', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBeverages (context, payload) {
      axios({
        method: 'GET',
        url: 'beverages',
        headers: { access_token: localStorage.access_token }
      })
        .then(response => {
          context.commit('insertBeverages', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    foodFindOne (context, payload) {
      axios({
        method: 'GET',
        url: `foods/${payload}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('insertDataFindOne', data)
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    beverageFindOne (context, payload) {
      axios({
        method: 'GET',
        url: `beverages/${payload}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('insertDataFindOne', data)
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editFoods (context, payload) {
      axios({
        method: 'PUT',
        url: `foods/${payload.id}`,
        headers: { access_token: localStorage.access_token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.category
        }
      })
        .then(response => {
          context.dispatch('fetchFoods')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editBeverages (context, payload) {
      axios({
        method: 'PUT',
        url: `beverages/${payload.id}`,
        headers: { access_token: localStorage.access_token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(response => {
          context.dispatch('fetchBeverages')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteFood (context, payload) {
      axios({
        method: 'DELETE',
        url: `foods/${payload}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(response => {
          router.push('/food')
          context.dispatch('fetchFoods')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteBeverage (context, payload) {
      axios({
        method: 'DELETE',
        url: `beverages/${payload}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(response => {
          router.push('/beverage')
          context.dispatch('fetchBeverages')
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  modules: {
  }
})
