<template>
  <div class="about">
    <h1>This is rate your set page</h1>
    <p>Lorem blah blah </p>
  </div>

<section class="search-area">
 <form id="search"> 
  <fa icon="search" class="icon"></fa>
<input class="search" type="text" placeholder="Name of set"/>
  </form>
  </section>

<FormComponent />

<section class="card-area" v-for="set in usersSets" :key="set.id">
<router-link :to="{ name: 'editView', params: { id: set.id }}"> 
<div class="card" >
  <p class="card-date">Date : {{set.date}} </p>
  <p class="card-name">Name : {{set.name}}</p>
  <p class="card-score">Score :{{set.score}}</p>
  <p class="card-notes">Notes :{{set.notes}}</p>
  <p class="card-id">ID :{{set.id}}</p>
  <p class="card-photo">Photo: {{set.photo}} </p>

 </div>
  </router-link> 


<router-link :to="{ name: 'editView', params: { id: set.id }}"> 
<button class="edit">
  <fa icon="pencil"></fa>
</button></router-link>


<button class="delete">
  <fa icon="trash-can"></fa>
</button>




  <!-- <router-link to="/sets/view"></router-link> -->

</section>

</template>


<script>
//  import { SetsService } from "../../services/SetsService.js";

 import FormComponent from "../../components/FormComponent.vue"

export default {
 
    data: function () {
        return {
            showForm: false,
            date: [],
            notes: "",
            name: "",
            scores: [],
            photo: "",
            // data: [],
            setsErrorMessage: "",
            loading: false,
            type: [],
            id: "",
            usersSets: [],
            
        };
        
    },
    mounted(){
    fetch('http://localhost:9900/yourSets')
    .then(res => res.json())
    .then(data => this.usersSets = data)
    .catch(err => console.log(err.message))
 },
 
      components: {  FormComponent }
}

</script>

<style>

#search {
  display: flex;
  flex-direction: row;
  align-content: center;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label, h2 {
  color: #aaa;
  display: inline-block;
  margin: 25px 0px 5px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

button {
  background: blue;
  border: 0;
  padding: 12px 16px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.card-area {
display: flex;
justify-content: center;
}
.card {
background-color: rgb(252, 233, 233);
width: 60%;
display: flex;
flex-direction: column ;
align-items: flex-start;
padding: 30px;
margin: 40px;
}


.score {
   display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd
}
.icon {
 align-self: center;
}
input[type="checkbox"]
 {
  display: inline-block;
  width: 16px;
  margin:0 30px 0 0;
  position: relative;
  top: 2px;
  
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}



</style>