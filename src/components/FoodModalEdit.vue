<template>
  <div>
    <!-- MODAL -->
    <div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="modalEdit" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit your foods here!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="add-title-modal" class="form-label">Name</label>
                <input type="text" class="form-control" v-model="dataFindOne.name">
              </div>
              <div class="mb-3">
                <label for="add-description-modal" class="form-label">Category</label>
                <input type="text" class="form-control" v-model="dataFindOne.CategoryId">
                <p style="font-size: 9pt; font-style: italic;">1: Indonesia Barat; 2: Indonesia Tengah; 3: Indonesia Barat</p>
              </div>
              <div class="mb-3">
                <label for="add-description-modal" class="form-label">Price</label>
                <input type="number" class="form-control" v-model="dataFindOne.price">
              </div>
              <div class="mb-3">
                <label for="add-description-modal" class="form-label">Stock</label>
                <input type="number" class="form-control" v-model="dataFindOne.stock">
              </div>
              <div class="mb-3">
                <label for="add-title-modal" class="form-label">Image URL</label>
                <input type="text" class="form-control" v-model="dataFindOne.image_url">
              </div>
              <div>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style="width: 100%; margin-bottom: 1rem;" @click.prevent="editFoods()" >Submit</button><br>
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
import { mapState } from 'vuex'

export default {
  name: 'ModalEdit',
  computed: {
    ...mapState(['dataFindOne'])
  },
  methods: {
    editFoods () {
      const payload = {
        id: this.dataFindOne.id,
        name: this.dataFindOne.name,
        price: this.dataFindOne.price,
        stock: this.dataFindOne.stock,
        image_url: this.dataFindOne.image_url,
        CategoryId: this.dataFindOne.CategoryId
      }
      this.$store.dispatch('editFoods', payload)
    }
  }
}
</script>

<style>

</style>
