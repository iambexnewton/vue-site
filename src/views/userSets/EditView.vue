<template>
  <h1>Edit page</h1>
<p>{{id}}</p>



  

</template>


<script>


export default {
data(){
  return {
    id: this.$route.params.id
  }
},
}
  

</script>

<style>

</style>
