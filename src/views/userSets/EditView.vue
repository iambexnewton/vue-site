<template>
  <h1>Details...edit</h1>
<button @click="back">go back</button>
<button @click="forward">go forward</button>



<div v-if="error">{{error}}</div>
<!-- <div v-if="userSet.length" class="item"> -->
<h3>{{userSet.name}}</h3>
<p>{{userSet.notes}}</p>
<!-- <p>{{group}}</p> -->
 <!-- </div> -->
 
 <!-- <div v-else><Spinner /></div> -->

 <div class="image-wrapper">
    <img :src="userSet.photo" alt={userSet.name} class="form-img" /> 
    </div>


<!-- <pre>{{group}}</pre> -->
  

</template>


<script>



import Spinner from "../../components/Spinner.vue"
import getPost from "../../composables/getPost"

export default {
  components: {Spinner},
  props:['id',],
  setup(props) {
const {userSet, error, load} = getPost(props.id)

load()
return {userSet, error, Spinner}
  },
  methods: {
 back()
 {this.$router.go(-2)},
  forward()
  {this.forward.$router.go(1)}
},
// created: async function (){
//   try {
//     let groupResponse = await SetsService.getAllGroups(response.data)
//     this.group = groupResponse.data
//   }
//   catch (error){
//     console.log(error)
//   }
// }

}
</script>

<style>
</style>
