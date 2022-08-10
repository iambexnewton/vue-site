<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <li v-for="job in jobs" :key="job.id">
       <p>{{job.name}}</p>
      </li>
      
    </ul>
   
  </div>
  
</template>

<script>

export default {
    
  data() {
    return {
      jobs: []
    };
  },
mounted(){
    fetch('http://localhost:9900/jobs')
    .then(res => res.json())
    .then(data => this.jobs = data)
    .catch(err => console.log(err.message))
    
    console.log(this.jobs)
}



//   async created() {
//     try {
//       const res = await axios.get(`http://localhost:9900/todos`);

//       this.todosArray = res.data;
//       console.log("This" + todos)
//     } catch (e) {
//       console.log(e);
//     }
//   }
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