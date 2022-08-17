<template>
  <div class="about">
    <h1>Your Sets</h1>
    <p>Here you can upload, rate, search and view your sets, <br /> keep track of your sets and have fun!</p>
  </div>

<section class="search-area">
 <form id="search"> 
  <fa icon="search" class="icon"></fa>
<input class="search" type="text" placeholder="Name of set"/>
  </form>

<router-link :to="{name : 'FormView'}">
  <a class="cta">Upload a new set</a></router-link>
  </section>


<section class="grid-container">
<div class="card-wrapper" v-for="set in usersSets" :key="set.id">
 
  <!-- <router-link :to="{ name: 'SingleView', params: { id: set.id }}"> -->

  <div class="card"> 
<div class="parent">
 <div class="div1">
  <div class="img-container">
 <img :src="set.photo" class="img" alt=" "/>
</div> 
 </div>
 <div class="div2">
  <p class="card-name">Name : {{set.name}}</p>
  <p class="card-score">Score :{{set.score}}</p>
  <p class="card-notes">Notes :{{set.notes}}</p>
  <p class="card-id">ID :{{set.id}}</p>
 </div>
 <!-- <a v-on:click="clickDeleteSet(set.id)">x</a>  -->
  </div> 
  <!-- </router-link>  -->
   <div class="button-container">
  <router-link :to="{ name: 'EditView', params: { id: set.id }}">
  <a class="edit">
    <fa icon="pencil"></fa>
    </a>
 </router-link>
 
  </div>
<button class="delete" v-on:click="clickDeleteSet(set.id)">
        <fa icon="trash-can"></fa>
          </button>
  </div>
  </div>
</section>

<!-- <section class="card-area" v-for="set in usersSets" :key="set.id">
<router-link :to="{ name: 'SingleView', params: { id: set.id }}"> 
<div class="lego-container">
<div class="container" >
  <div class="cube">
    <div class="face top">Top</div>
    <div class="face bottom">Bottom</div>
      <img :src="set.photo"  class="face left" alt=" " /> 
    <div class="face right">Right</div>
 <div class="face front"  id="face-front" :key="set.id">
    <div class="front-container">
      <ul>
        <li >{{set.name}} </li>
        <li >{{set.score}} / 5</li>
        
      </ul>
      </div>
  </div>
</div>
  </div>
  </div>
   </router-link> 
<div class="button-container">
  <router-link :to="{ name: 'EditView', params: { id: set.id }}"><button class="edit">
        <fa icon="pencil"></fa>
          </button> </router-link>
      <button class="delete" @click="clickDeleteSet(id)">
        <fa icon="trash-can"></fa>
          </button>
</div>
</section> -->


</template>


<script>
import {SetsService} from "../../../services/SetsService"

export default {

    data: function () {

        return {
            // showForm: false,
            group:[],
            // setsErrorMessage: null,
            //  loading: false,
            
            usersSets: [],
        }
    },


created : async function (){
try {
  this.loading = true
let response = await this.getAllSetsData();
this.usersSets = response.data
this.loading = false
console.log(response.data)
}
catch (error){
this.setsErrorMessage = error
this.loading = false
}
},

methods : {
getAllSetsData : async function (){
  return await SetsService.getAllSets();
},
clickDeleteSet : async function(id) {
  try {
    let response = await SetsService.deleteSet(id);
    if(response){
       this.loading = true
let response = await this.getAllSetsData();
this.usersSets = response.data
this.loading = false
    }
  }
catch(error){
  console.log(error)
}
},
 },   
 
       
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
  background: 2032B0;
  border: 0;
  padding: 12px 16px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
}
button.edit {
  background-color: pink;

  flex-direction: row;
  margin:0;
}
.cta {
  border-radius: 4px;
  border-width: 2px;
  color: #0b1117;
  font-weight: 550;
  padding: 16px;
  font-size: 0.875rem;
  border:solid;
  position:relative;
  border-collapse: collapse;
   background-color: rgb(253, 128, 36); 
   border-color: rgb(253, 128, 36); 
}
.cta:hover{
  cursor: pointer;
  background: transparent;
  font-weight: 550;
  padding: 16px;

}
.submit {
  text-align: center;
}

.grid-container {
  background-color: rgba(29, 228, 250, 0.215);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.card-wrapper {

 margin: 40px;
  display: flex;
  flex-direction: wrap;
  justify-items: space-between;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

}
.card {
background-color: rgb(252, 233, 233);
width: 60%;
padding: 30px;
margin: 30px;
border-radius: 20px;

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
  display: flex;
  flex-flow: column;
  height: inherit;
  width: inherit;
  margin:0;
}
li {
  flex: 0 0 auto;
}


/* lego cube */

/* .lego-container {
  display: flex;
  flex-direction: row;
}
.container {
  width: 200px;
  height: 200px;
  perspective: 500px;
  margin: 100px;
  display: flex
}

.cube {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform: rotate3d(0, 30, 0, 40deg);
}

.face {
  width: 200px;
  height: 200px;
  background: #CA1F08;
  border: #CA1F08;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 2rem;
}
.front {
  transform: translateZ(100px);
  width: 300px;
  height: 200px;
}
.back {
  transform: translateZ(-100px) ;
}
.left {
 
  transform: translateX(-100px) rotateY(-90deg);
}
.right {
  transform: translateX(100px) rotateY(90deg);
}
.top {
  transform: translateY(-100px) rotateX(90deg);
}

.bottom {
  transform: translateY(100px) rotateX(-90deg);
} */
.img-container {
 margin-left: auto;
 margin: auto;
 width: 100%;
}
.img {
width: 100%;
border-radius: 20px;
}


/* //change the color of the faces */
/* .face:nth-child(2n) {
  background: #1E601E;
  border: #1E601E;
} */
</style>