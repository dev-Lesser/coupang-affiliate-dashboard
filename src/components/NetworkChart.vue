
<template>
    <d3-network 
    :net-nodes="netNodes" 
    :net-links="netLinks" 
    :options="options" style="background-color: white"/>
</template>

<script>
import D3Network from 'vue-d3-network'

export default {
    components:{
        D3Network
    },
    props:{
        netNodes:Array,
        netLinks:Array,
    },
    data() {
        return {
            nodeSize:15,
            canvas:false,
        }
        
    },
    mounted(){
    },  
    computed:{
        options(){
            return{
                force: 350,
                size:{ h:480},
                nodeSize: this.nodeSize,
                nodeLabels: true,
                linkLabels: true,
                canvas: this.canvas
            }
        }
    },
    
}
</script>