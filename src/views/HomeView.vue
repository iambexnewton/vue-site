<template>
  <div class="home">
    <div>dfghj</div>
    <img alt="Vue logo" src="../assets/logo.png" />
 
  </div>

  <div v-for="name in matchingNames" :key="name"> {{name}}</div>

  <!-- <p>Welcome {{name}} {{age}}</p>
  <button @click="handleClick">
    click me
  </button> -->


  <input type="text" v-model="search">
  <p>search term - {{search}}</p>
</template>

<script>




// @ is an alias to /src

import { ref, computed } from "vue";


export default {
name: 'HomeView',
setup(){
  const search = ref('')
  const names = ref(["fghj", "dfghj", "vbn", "xcvu"])

 const matchingNames = computed(() => {
  return names.value.filter((name)=> name.includes(search.value))
 })

return { names, search, matchingNames}
},


  
 
};
</script>
