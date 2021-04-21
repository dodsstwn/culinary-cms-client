<template>
  <div>
    <!-- MODAL -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Beverages to Your CMS!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="add-title-modal" class="form-label">Name</label>
                <input type="text" class="form-control" v-model="nameAdd">
              </div>
              <div class="mb-3">
                <label for="add-description-modal" class="form-label">Price</label>
                <input type="number" class="form-control" v-model="priceAdd">
              </div>
              <div class="mb-3">
                <label for="add-description-modal" class="form-label">Stock</label>
                <input type="number" class="form-control" v-model="stockAdd">
              </div>
              <div class="mb-3">
                <label for="add-title-modal" class="form-label">Image URL</label>
                <input type="text" class="form-control" v-model="imageUrlAdd">
              </div>
              <div>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style="width: 100%; margin-bottom: 1rem;" @click.prevent="addBeverages()" >Submit</button><br>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="width: 100%">Cancel</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL -->
  </div>
</template>

<script>
export default {
  name: 'AddBeverageModal',
  data () {
    return {
      nameAdd: '',
      priceAdd: '',
      stockAdd: '',
      imageUrlAdd: ''
    }
  },
  methods: {
    addBeverages () {
      this.$store.dispatch('addBeverages', { name: this.nameAdd, price: this.priceAdd, stock: this.stockAdd, image_url: this.imageUrlAdd })
      this.nameAdd = ''
      this.priceAdd = ''
      this.stockAdd = ''
      this.imageUrlAdd = ''
    }
  }
}
</script>

<style>

</style>
