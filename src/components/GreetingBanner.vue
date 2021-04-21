<template>
  <div class="row d-flex justify-content-center align-items-center p-0" style="margin-top: 10rem; margin-left: 0; margin-bottom: 0; margin-right: 0;">
    <div class="col-md-6 d-flex flex-column justify-content-end align-items-end p-0">
      <p style="font-family: 'Cocogoose'; font-size: 30pt; color: #D62828; margin: 0;">Hello, welcome to your</p>
      <p style="font-family: 'Cocogoose'; font-size: 30pt; color: #D62828;">CMS Culinary Apps!</p>
      <p style="font-style: Italic; font-size: 15pt; color: #D62828; margin: 0;">You can doin CRUD for your</p>
      <p style="font-style: Italic; font-size: 15pt; color: #D62828;">food and beverage datas.</p>
      <div>
        <button type="button" class="btn" style="margin-top: 3pt; font-family: 'Euclid'; color: #FFFFFF; height: 32px; width: 90px; font-size: 9pt; background-color: #F48C06; margin: 0 5pt;" data-bs-toggle="modal" data-bs-target="#modalEdit" @click.prevent="changePageFood()">Foods</button>
        <button type="button" class="btn" style="margin-top: 3pt; font-family: 'Euclid'; color: #FFFFFF; height: 32px; width: 90px; font-size: 9pt; background-color: #F48C06; margin: 0 5pt;" data-bs-toggle="modal" data-bs-target="#modalEdit" @click.prevent="changePageBeverage()">Beverages</button>
      </div>
    </div>
    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center p-0">
      <img src="/img/chef.png" alt="chef" style="width: 50%;">
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'GreetingBanner',
  methods: {
    changePageFood () {
      router.push('/food')
    },
    changePageBeverage () {
      router.push('/beverage')
    }
  }
}
</script>

<style>

</style>
