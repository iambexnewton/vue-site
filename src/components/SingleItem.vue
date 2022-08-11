<template>
<div class="post">

    <router-link :to="{ name: 'EditView', params: { id: item.id}}" >
<h3>{{item.name}}</h3></router-link>
<p>{{snippet}}</p>
<!-- <span v-for="group in item.group" :key="group.id">{{group}}</span> -->
</div>

</template>

<script>
import {computed} from 'vue'

export default {
    props: ['item'],
    setup(props) {
        const snippet = computed(()=> {
            return props.item.notes.substring(0, 250) + "..."
        })
        return {snippet}
    }
}
</script>