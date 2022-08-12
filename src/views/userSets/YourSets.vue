<template>
  <div class="about">
    <h1>Your Sets</h1>
    <p>Here you can upload, rate and view your sets, <br /> keep track of your sets and have fun!</p>
  </div>

<section class="search-area">
 <form id="search"> 
  <fa icon="search" class="icon"></fa>
<input class="search" type="text" placeholder="Name of set"/>
  </form>

<router-link :to="{name : 'FormView'}">
  <button class="cta">Upload a new set</button></router-link>
  </section>






<!-- <div class="card" >
 <p class="card-date">Date : {{set.date}} </p>
  <p class="card-name">Name : {{set.name}}</p>
  <p class="card-score">Score :{{set.score}}</p>
  <p class="card-notes">Notes :{{set.notes}}</p>
  <p class="card-id">ID :{{set.id}}</p>
  <div class="img-container">
  <img :src="set.photo" class="img" alt=" ">
</div> 
 </div> -->



<section class="card-area" v-for="set in usersSets" :key="set.id">
<router-link :to="{ name: 'EditView', params: { id: set.id }}"> 
<div class="lego-container">
<div class="container" >
  <div class="cube">
    <div class="face top">Top</div>
    <div class="face bottom">Bottom</div>
      <img :src="set.photo"  class="face left" alt=" " /> 
    <div class="face right">Right</div>
 <div class="face front"  id="face-front" :key="set.id">
    <div class="front-container">
      <ul>
        <li >{{set.name}} </li>
        <li >{{set.score}} / 5</li>
        
      </ul>
      </div>
  </div>
</div>


  

  </div>
<div class="button-container">
      <button class="edit">
        <fa icon="pencil"></fa>
          </button>

      <button class="delete">
        <fa icon="trash-can"></fa>
          </button>
</div>
</div>
  </router-link> 

</section>


</template>


<script>


export default {

    data: function () {
        return {
            showForm: false,
            date: "",
            notes: "",
            name: "",
            scores: "",
            tags: "",
            id: "",
            photo: "",
            group:[],
            // data: [],
            setsErrorMessage: "",
            // loading: true,
            
            usersSets: [],
            
        };
        
    },
    mounted(){
    fetch('http://localhost:9900/userSets')
    .then(res => res.json())
    .then((data) => {
      this.usersSets = (data)
      // loading(false)
      })
    .catch(err => console.log(err.message))
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
  background: 2032B0;
  border: 0;
  padding: 12px 16px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
}
button.edit {
  background-color: pink;

  flex-direction: row;
  margin:0;
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
.submit {
  text-align: center;
}
 .card-area {
display:flex;
flex-direction: wrap;
background-color:  #E6F3FF

}
/* .card {
background-color: rgb(252, 233, 233);
width: 60%;
display: flex;
flex-direction: column ;
align-items: flex-start;
padding: 30px;
margin: 30px;
border-radius: 20px;
} */


/* .score {
   display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd
} */
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
  display: flex;
  flex-flow: column;
  height: inherit;
  width: inherit;
  margin:0;
}
li {
  flex: 0 0 auto;
}


/* lego cube */

.lego-container {
  display: flex;
  flex-direction: row;
}
.container {
  width: 200px;
  height: 200px;
  perspective: 500px;
  margin: 100px;
  display: flex
}

.cube {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform: rotate3d(0, 30, 0, 40deg);
}

.face {
  width: 200px;
  height: 200px;
  background: #CA1F08;
  border: #CA1F08;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 2rem;
}
.front {
  transform: translateZ(100px);
  width: 300px;
  height: 200px;
}
.back {
  transform: translateZ(-100px) ;
}
.left {
 
  transform: translateX(-100px) rotateY(-90deg);
}
.right {
  transform: translateX(100px) rotateY(90deg);
}
.top {
  transform: translateY(-100px) rotateX(90deg);
}

.bottom {
  transform: translateY(100px) rotateX(-90deg);
}
.img-container {
 margin-left: auto;
 margin: auto;
 width: 100%;
}
.img {
width: 100%;
border-radius: 20px;
}


/* //change the color of the faces */
/* .face:nth-child(2n) {
  background: #1E601E;
  border: #1E601E;
} */
</style>