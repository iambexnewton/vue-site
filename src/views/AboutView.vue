<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Lorem</p>
  </div>
<form>
    <label>Date</label>
    <input type="date" required  v-model='date' />

    <label>Set</label>
    <input type="set" required  v-model='set' />

    
   <div class="score">

<input type="checkbox">
<label>1</label> 

   <input type="checkbox">
   <label>2</label>

   <input type="checkbox">
   <label>3</label>

   <input type="checkbox">
   <label>4</label>

   <input type="checkbox">
   <label>5</label>
    </div>
  

    <label>Notes</label>
    <input type="notes" required  v-model='notes' />

  </form>

  <p>Date : {{date}}</p>
  <p>Set : {{set}}</p>
  <p>Score : {{score}}</p>
  <p>Notes : {{notes}}</p>
</template>




<script>
export default {
  data() {
    return {
      date: '', 
      set: '',
      score: '',
      notes: '',
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
label {
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

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin:0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>