<template>


<button class="cta" @click="toggleShowForm">Upload a new set</button>

  <section v-if="showForm">
<form @submit.prevent="handleSubmit()">
    <!-- <label>Date</label>
    <input type="date" v-model='date' /> -->
    <!-- <div class="error" v-if="dateErrorMessage">{{dateErrorMessage}}</div> -->

    <label>Name</label>
    <input type="name" v-model='set.name' />
    <!-- <div class="error" v-if="setsErrorMessage">{{setsErrorMessage}}</div> -->

  <div class="score">
    <h2>Score</h2>
    <ul>
<li>
  <label>1</label>
<input type="radio" value="one" v-model="set.scores">
</li>
<li>
  <label>2</label>
   <input type="radio" value="two" v-model="set.scores">
</li>
<li> <label>3</label>
   <input type="radio" value="three" v-model="set.scores">
</li>
<li>
  <label>4</label>
   <input type="radio" value="four" v-model="set.scores"></li>
<li>
<label>5</label>
   <input type="radio" value="five" v-model="set.scores">
   </li>
   </ul>
    </div>  


    <label>Notes</label>
    <input type="text" v-model='set.notes' />


 <label>Photo URL</label>
    <input type="text"  v-model='set.photo' />
<span>
    <div class="image-wrapper">
    <img :src="set.photo" alt="" class="form-img" /> 
    </div>
</span>


    <label>Group</label>
    <select v-model="set.group" v-if="groups.length > 0">
<option value="">Select Group</option>
<option :value="group.name" v-for="group of groups" :key="groups.id">{{group.name}}</option>
    </select>
   

<div class="submit">
    <button>Submit</button>
  </div>
 </form>
 </section>
<pre>{{set}}</pre>
</template>


<script>

import { SetsService } from "../../services/SetsService";


export default {
  name: "FormComponent",
    data: function () {
        return {
          set :{
            name: "",
            scores: "",
            notes: "",
            photo: "",
            group: [],
            
          },
         groups:[],

            showForm: false,
            data: [],
            setsErrorMessage: "",
            // loading: false,
            
        };
    },

created : async function (){
  try {
    let response = await SetsService.getAllGroups();
    this.groups = response.data
  }
  catch(error){
  console.log(error)
}
},


 methods:{
        
 toggleShowForm() {
            this.showForm = !this.showForm;
        },
//change this to get the name of the group selected into the array
//     mounted(){
//     fetch('http://localhost:9900/groups')
//     .then(res => res.json())
//     .then((data) => {
//       this.groups = (data)
//       console.log(data)
//       // loading(false)
//       })
//     .catch(err => console.log(err.message))
//  },

 handleSubmit : async function (){
let response = await SetsService.createSet(this.set);
if(response){
  return this.$router.push('/yoursets')
}
else{

}
},
catch (error){
  console.log(error)
}
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
  background: #fd8042;
  padding: 16px;
  margin-top: 20px;
  border-radius: 4px;
  border-width: 2px;
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
.image-wrapper {

display: flex;
align-items: center;
justify-content: center;

}
.form-img {
height: 100px;
width: 100px;
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
padding: 30px
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
input[type="radio"]
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