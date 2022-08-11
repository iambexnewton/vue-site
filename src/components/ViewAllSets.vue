<template>
  <div>
    
  </div>
</template>

<script>
export default { 
  data() {
    return {
  
}
  },

mounted(){
    fetch('http://localhost:9900/jobs')
    .then(res => res.json())
    .then(data => this.jobs = data)
    .catch(err => console.log(err.message))
    
    console.log(this.jobs)
},



  async created() {
    try {
      const res = await axios.get(`http://localhost:9900/todos`);

      this.todosArray = res.data;
      console.log("This" + todos)
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
h1 {
  text-decoration: underline;
}

li {
  color: white;
}
</style>