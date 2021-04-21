<template>
  <div class="mx-0 px-0">
    <div class="row mx-0 px-0 d-flex flex-row justify-content-center">
      <div v-for="(food, i) in item.Food" :key="i" class="col-3 m-5 p-0 rounded-2 d-flex flex-column justify-content-center align-items-center shadow" style="background-color: #EDEDED; min-height: 15rem; width: 18rem;">
        <img :src="food.image_url" alt="mac" style="width: 50%;" class="mt-3">
        <p class="m-0" style="font-family: 'Euclid'; padding-top: 2pt;"> {{ food.name }} </p>
        <p class="m-0" style="font-family: 'Euclid';">{{ convertRupiah(food.price) }}</p>
        <div class="d-flex flex-column justify-content-center align-items-center mb-3 mt-2">
          <button type="button" class="btn" style="background-color: #8E8D89; margin-top: 3pt; font-family: 'Euclid'; color: #E4E4E3; height: 32px; width: 90px; font-size: 9pt;">Stock: {{ food.stock }} </button>
          <button type="button" class="btn" style="margin-top: 3pt; font-family: 'Euclid'; color: #E4E4E3; height: 32px; width: 90px; font-size: 9pt; background-color: #EE6C4D;" data-bs-toggle="modal" data-bs-target="#modalEdit" @click.prevent="foodFindOne(food.id)">Edit</button>
          <button type="button" class="btn btn-danger" style="margin-top: 3pt; font-family: 'Euclid'; color: #E4E4E3; height: 32px; width: 90px; font-size: 9pt;" @click.prevent="pressDeleteButton({ id: food.id, name: food.name })">Delete</button>
        </div>
        <FoodModalEdit></FoodModalEdit>
      </div>
    </div>
  </div>
</template>

<script>
import FoodModalEdit from '../components/FoodModalEdit'
import Swal from 'sweetalert2'

export default {
  name: 'FoodCard',
  props: ['item'],
  components: {
    FoodModalEdit
  },
  methods: {
    convertRupiah (angka) {
      var rupiah = ''
      var angkarev = angka.toString().split('').reverse().join('')
      for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',00-'
    },
    pressDeleteButton (data) {
      Swal.fire({
        title: `Are you sure delete ${data.name}?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteFood(data.id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    },
    foodFindOne (id) {
      this.$store.dispatch('foodFindOne', id)
    },
    deleteFood (id) {
      this.$store.dispatch('deleteFood', id)
    }
  }
}
</script>

<style>

</style>
