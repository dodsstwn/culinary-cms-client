<template>
  <!-- LOGIN PAGE -->
  <div id="login-page" class="row login m-0" style="min-height: 100vh; width: 100%; background-color: #FEFEFE;">
    <div class="d-flex flex-column justify-content-center align-items-center mt-5">
      <img src="/img/chef-1.png" alt="hp" style="width: 25%;">
      <p style="font-family: 'Cocogoose'; font-size: 22pt;" class="m-0 mt-5">Welcome to Culinary CMS Apps!</p>
      <p style="font-style: italic;">Please sign in to access your app.</p>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <!-- FORM INPUT -->
      <div id="input-fields" style="margin-top: 2rem; margin-right: 5rem;">
        <form v-on:submit.prevent="login" class="mb-5">

          <div class="input-group mb-3"  style="width: 400px; margin-left: 40px;">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1" style="min-height: 100%; width: 38px;"><i class="fa fa-user" aria-hidden="true"></i></span>
            </div>
            <input type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" v-model="emailLogin" required>
          </div>

          <div class="input-group mb-3"  style="width: 400px; margin-left: 40px;">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1" style="min-height: 100%; width: 38px;"><i class="fa fa-key" aria-hidden="true"></i></span>
            </div>
            <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" v-model="passwordLogin" required>
          </div>
          <button type="submit" class="btn mt-3" style="margin-left: 40px; font-family: 'Cocogoose'; width: 400px; color: #fff; background-color: #DC2F02;" id="btn-sign-in">Sign In</button>
        </form>
      </div>
      <!-- FORM INPUT -->
    </div>
    <StripDown></StripDown>
  </div>
  <!-- LOGIN PAGE -->
</template>

<script>
import StripDown from '../components/StripDown'

export default {
  name: 'Login',
  components: {
    StripDown
  },
  data () {
    return {
      emailLogin: '',
      passwordLogin: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.emailLogin, password: this.passwordLogin })
      this.emailLogin = ''
      this.passwordLogin = ''
    }
  }

}
</script>

<style>

</style>
