<template>
  <div class="about">
    <h1>This is rate your set page</h1>
    <p>Lorem blah blah </p>
  </div>

<form @submit.prevent="handleSubmit">
    <label>Date</label>
    <input type="date" v-model='date' />
    <!-- <div class="error" v-if="dateErrorMessage">{{dateErrorMessage}}</div> -->

    <label>Set</label>
    <input type="sets" v-model='sets' />
    <div class="error" v-if="setsErrorMessage">{{setsErrorMessage}}</div>

  <div class="score">
    <h2>Score</h2>
    <ul>
<li>
  <label>1</label>
<input type="checkbox" value="one" v-model="scores">

</li>

<li>
  <label>2</label>
   <input type="checkbox" value="two" v-model="scores">
   
</li>

<li> <label>3</label>
   <input type="checkbox" value="three" v-model="scores">

</li>
<li>
  <label>4</label>
   <input type="checkbox" value="four" v-model="scores"></li>
   
<li>
<label>5</label>
   <input type="checkbox" value="five" v-model="scores">
   </li>
   </ul>
    </div>  


    <label>Notes</label>
    <input type="text" required  v-model='notes' />
<div class="submit">
    <button>Submit</button>
  </div>
 </form>
    

 

  

  <p>Date : {{date}}</p>
  <p>Set : {{sets}}</p>
  <p>Score : {{scores}}</p>
  <p>Notes : {{notes}}</p>


</template>




<script>
export default {
  data() {
    return {
      date: [], 
      sets: [],
      notes: '',
      scores: [],
      data: [],
      setsErrorMessage: ''
    }
  },
  methods: {
    handleSubmit() {
     this.errorMessage = this.sets.length > 0 ? '' : 'Please enter the set details'  
    }
  }
}

</script>

<style>
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
.score {
   display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd
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