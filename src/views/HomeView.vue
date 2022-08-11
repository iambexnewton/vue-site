<template>
  <div class="home">
    <div>HOME I GUESS</div>
   </div>

 

<div v-if="error">{{error}}</div>
<div v-if="userSets.length">
 <UserLegoList :userSets="userSets" />
 
</div>

<div v-else><Spinner /></div>
</template>


<script>
import UserLegoList from "../components/UserLegoList.vue";
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts.js"
import getGroups from "../composables/getGroups";





export default {
name: 'HomeView',
components: { UserLegoList, Spinner},
setup(){
  const {userSets, groups, error, load} = getPosts()

  load()

return { userSets, error}
},


}
</script>
