<template>
  <nav class="nav">
    <!-- <Spinner /> -->
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'yoursets' }">Your Sets</router-link> |
    <router-link :to="{ name: 'sets' }">Sets</router-link> |
    <router-link :to="{ name: 'FormView' }">Add a set</router-link> |
  </nav>


  <router-view />
  <footer class="footer">
    <div>
<ul>
  <li>
      This is not a Lego site.
  </li>
  <li>
      Created to practice Vue3 
  </li>
  <li>
     Made by rebecca Newton
  </li>
</ul>
    
      
      
    </div>
  </footer>
</template>

<script>

//  import Spinner from "./components/Spinner.vue";

export default {
  // name: "App",
  //  components: {Spinner}


}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 40px;
  background: #ffd400;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}
nav a:hover {
  cursor: pointer;
 
}
nav a.router-link-exact-active {
  color: white;
  background: red;
}
footer {
  background-color:#201d48;
  color: white;
}


</style>
