<template>


<button @click="toggleShowForm">UPDATE YOUR SET LISTSX</button>

  <section v-if="showForm">
<form @submit.prevent="handleSubmit">
    <label>Date</label>
    <input type="date" v-model='date' />
    <!-- <div class="error" v-if="dateErrorMessage">{{dateErrorMessage}}</div> -->

    <label>Name</label>
    <input type="name" v-model='name' />
    <!-- <div class="error" v-if="setsErrorMessage">{{setsErrorMessage}}</div> -->

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
    <input type="text" v-model='notes' />


 <label>Photo URL</label>
    <input type="text"  v-model='photo' />

<div class="submit">
    <button>Submit</button>
  </div>
 </form>
 </section>

</template>


<script>

export default {
  name: "FormComponent",
    data: function () {
        return {
            showForm: false,
            date: [],
            notes: "",
            name: "",
            scores: [],
            photo: "",
            data: [],
            setsErrorMessage: "",
            loading: false,
            type: [],
        };
    },
    methods:{
        toggleShowForm() {
            this.showForm = !this.showForm;
        }
    }
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