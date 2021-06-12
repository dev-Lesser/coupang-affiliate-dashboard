<template>
    <v-container fluid>
        <!-- <v-img :src="img"></v-img> -->
        <v-layout wrap>
            
            <v-flex xs12 sm6 md6>
                <v-card>
                    <network-chart :netNodes="netNodes" :netLinks="netLinks" />
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md6>
                <v-card>
                    <word-cloud :words="result" />
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import homeImg from '@/assets/home.jpg'
import NetworkChart from '@/components/NetworkChart'
import WordCloud from '@/components/WordCloud'
export default {
    components:{
        NetworkChart,
        WordCloud,
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
