<template>
  <h1>edit edit edit</h1>
<button @click="back">go back</button>
<button @click="forward">go forward</button>


<div v-if="error">{{error}}</div>
<!-- <div v-if="userSet.length" class="item"> -->
<!-- <h3>{{userSet.name}}</h3>-->
 
<!-- <p>{{group}}</p> -->
 <!-- </div> -->
 
 <!-- <div v-else><Spinner /></div> -->

 <!-- <div class="image-wrapper">
    <img :src="userSet.photo" alt={userSet.name} class="form-img" /> 
    </div> -->
<p>{{userSet}}</p> 

<form @submit.prevent="updateSubmit()">
   <label>Name</label>
   
    <input type="name" v-model="userSet.name" />

     <div class="score">
    <label>Score</label>
    <p>previous score out of 5 was {{userSet.score}}</p>
    <ul>
<li>
  <label>1</label>
<input type="radio" value="one" v-model="userSet.score" >
</li>
<li>
  <label>2</label>
   <input type="radio" value="two" v-model="userSet.score" >
</li>
<li> <label>3</label>
   <input type="radio" value="three" v-model="userSet.score">
</li>
<li>
  <label>4</label>
   <input type="radio" value="four" v-model="userSet.score"></li>
<li>
<label>5</label>
   <input type="radio" value="five" v-model="userSet.score">
   </li>
   </ul>
    </div> 

    <label>Notes</label>
  
    <input type="text" v-model="userSet.notes"/>

    <label>Photo URL</label>
    <input type="text" v-model="userSet.photo"/>
<span>
    <div class="image-wrapper">
    <img :src="userSet.photo" alt="" class="form-img" /> 
    </div>
</span>


<!-- //problem with groups saving to db as names not number -->
 <!-- <label>Group</label>
 <p>{{userSet.group}}</p>
    <select v-model="userSet.group" v-if="groups.length > 0">
<option value="">Select Group</option>
<option :value="group.id" v-for="group of groups" :key="groups.id">{{group.name}}</option>
    </select> -->

    <div class="submit">
    <button>Submit</button>
  </div>

</form>
 

</template>


<script>
import Spinner from "../../components/Spinner.vue"
import getPost from "../../composables/getPost";
import { SetsService } from "../../../services/SetsService";

export default {
  components: {Spinner},
  props:['id'],

  setup(props) {
   
const {userSet, error, load} = getPost(props.id)

load()
return {userSet, error, Spinner, groups:[],
set: {
  name: "",
  score: "",
  notes: "",
  photo: "",
  group: "",
},
groups : [],
}
  },

  

created : async function () {
  try {
    let groupResponse = await SetsService.getAllGroups()
    this.groups = groupResponse.data
  }
  catch(error){
    // this.errorMessage= error;
    // this.loading = false;
    console.log("this" +error)
  }
},


methods : {
updateSubmit : async function () {
  try {
  let response = await SetsService.editSet(this.userSet,this.id);
if(response){
  return this.$router.push('/yoursets');
}
else {
  return this.$router.push('/');
}
}
catch (error){
  console.log(error)
}
 },




//  back()
//  {this.$router.go(-2)},
//   forward()
//   {this.forward.$router.go(1)}, 

},
}



</script>

<style>
</style>
