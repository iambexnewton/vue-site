<template>
<h1>
    list 
</h1>
<div class="post-list">
<div v-for="item in userSets" :key="item.id">
<!-- <SinglePost :post="item"/> -->
<SingleItem :item="item" />
<!-- <h3>{{item.name}}</h3> -->
</div>
</div>

</template>
<script>
import { onMounted, onUnmounted, onUpdated } from "vue"
  import SingleItem from "./SingleItem.vue"



export default {
    props: ['userSets'],
     components: { SingleItem, },
    setup(props) {
        onMounted(()=>console.log('mounted'))
        onUnmounted(()=>console.log('unmounted'))
         onUpdated(()=>console.log('updated'))
    }
}
</script>