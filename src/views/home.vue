<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10 >
                <recommend-item />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import homeImg from '@/assets/home.jpg'
import RecommendItem from '@/components/RecommendItem'

export default {
    components:{
        RecommendItem
    },
    
  
    data() {
        return {
            img: homeImg,
            result: [],
            words: []

        }
        
    },
    
    computed:{

    },
    methods:{

    },



}
</script>
