<template>
    <vue-word-cloud
    style="
        height: 487px;
        width: 100%;
    "
    :words="words"
    :color="([, weight]) => weight > 1000 ? 'DeepPink' : weight > 800 ? 'RoyalBlue' : 'Indigo'"
    font-family="Hanna"
    />
</template>
<script>
import VueWordCloud from 'vuewordcloud';

export default ({
    components:{
        VueWordCloud
    },
    setup() {
        
    },
    props:{
        words: Array
    },
    mounted(){
    }
    
})
</script>
