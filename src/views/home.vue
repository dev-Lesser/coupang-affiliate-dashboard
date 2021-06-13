<template>
    <v-container fluid grid-list-md>
        
        
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10 >
                <recommend-item />
            </v-flex>
        </v-layout>

        <v-layout wrap>

        </v-layout>
    </v-container>
</template>

<script>
import homeImg from '@/assets/home.jpg'
// import NetworkChart from '@/components/NetworkChart'
// import WordCloud from '@/components/WordCloud'
import RecommendItem from '@/components/RecommendItem'

export default {
    components:{
        // NetworkChart,
        // WordCloud,
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
        netNodes(){
            return this.analysisData.network.nodes;
        },
        netLinks(){
            return this.analysisData.network.links;
        },
        wordsData(){
            return this.analysisData.data.keyword;
        },
        analysisData(){
            return this.$store.state.analysisData;
        }
        
    },
    methods:{
        async initFunc(){
            this.result = []
            for (var i in this.wordsData){
                this.result.push([this.wordsData[i].word, this.wordsData[i].num])
            }
            return this.result;
        }
    },
    async mounted(){
        await  this.initFunc()
    },


}
</script>
