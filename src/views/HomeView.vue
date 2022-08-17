<template>
  <div class="home">
    <h1>Hi, welcome to your Lego organiser </h1>
    <h2>Hi {{username}}</h2>


 <form class="login" @submit.prevent="onLogin()">
<label for="username" class="label">Username</label>
<input type="text" id="username" class="input" v-model.trim="username"/>
<div v-if="errors.username">{{errors.username}}</div>
<label for="password" class="label">Password</label>
<input type="password" id="password" class="input" v-model.trim="password"/>
<p class="information">Password requires a minimum eight characters, at least one letter, one number and one special character"</p>
<div v-if="errors.password">{{errors.password}}</div>
<button class="button" type="submit" v-on:click="submitLogin">Log In</button>
 </form>


 
</div>

<button>Sign up</button>
</template>


<script>
import SignupValidations from "../../services/SignupValidations"

export default {
name: 'HomeView',

data(){
  return {
    username: '',
    password: '',
    errors: [],
  }
},
methods : {
  onLogin(){
let validations = new SignupValidations(this.username, this.password)
this.errors = validations.checkValidations()
if (this.errors.length) {
  return false
}
  }
}

}
</script>
<style>
.information {
  font-size: 10px;
}
</style>
