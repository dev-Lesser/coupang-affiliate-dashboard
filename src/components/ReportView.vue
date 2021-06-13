<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10 >
                <v-card>
                    <v-card-title></v-card-title>
                    <v-btn dark> #{{ theme }}</v-btn>
                    <v-card-title> 분석보고서입니다.</v-card-title>
                    <v-divider />

                    <!-- 분석보고서 네트워크 워드클라우드 레이아웃 -->
                    <v-layout wrap style="display:flex;justify-content:center;">
                        <v-flex xs12 sm12 md5 >
                            <v-card class="pa-3 ma-3">
                                <v-card-subtitle> 
                                    <v-chip small outlined>#{{ theme }}</v-chip>  
                                    관련 빅데이터 키워드 네트워크
                                </v-card-subtitle>
                            <network-chart :netNodes="netNodes" :netLinks="netLinks" />
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm12 md5 >
                            <v-card class="pa-5 ma-3">
                                <v-card-subtitle> 
                                    <v-chip small outlined>#{{ theme }}</v-chip>  
                                    관련 빅데이터 워드클라우드
                                </v-card-subtitle>
                                <word-cloud :words="words" />
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-layout wrap style="display:flex;justify-content:center;">
                        <v-flex xs12 sm12 md4>
                            <v-btn @click="filterData(1)">상위 키워드</v-btn>
                            <v-btn @click="filterData(2)">중위 키워드</v-btn>
                            <v-btn @click="filterData(3)">하위 키워드</v-btn>
                            <v-card class= "ma-3 pa-3">
                                <v-chip v-for="i,key in bigram" :key="key" class="ma-1" small :color="getColor(key)" outlined>{{ i.word.split('|')[0]+i.word.split('|')[1] }}</v-chip>
                                    
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm12 md4>
                            <v-card class= "ma-3 pa-3">
                                <v-chip v-for="i,key in trigram" :key="key"  class="ma-1" small :color="getColor(key)"  outlined>
                                    {{ i.word.split('|')[0]+i.word.split('|')[1] +i.word.split('|')[2] }}
                                    </v-chip>
                                    
                            </v-card>
                        </v-flex>
                    </v-layout>
                    
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>
<script>
import NetworkChart from '@/components/NetworkChart'
import WordCloud from '@/components/WordCloud'
import {getAllData} from '@/assets/api'
export default {
    components:{
        NetworkChart,
        WordCloud
    },
    data(){
        return {
            theme: this.$route.query.theme,
            netNodes: [],
            netLinks: [],
            words:[],
            bigram:[],
            trigram:[],
            top:[],
            middle:[],
            bottom:[]
        }
    },
    async created(){
        const [success, res] = await getAllData(this.theme)
        if (success){
            this.netNodes = res.network.nodes;
            this.netLinks = res.network.links;
            this.keyword = res.data.keyword;
            this.bigram = res.data.bigram;
            this.trigram = res.data.trigram
            for(var i of this.keyword){
                this.words.push([i.word, i.num])
            }
            // this.words
        }
        

    },
    mounted(){
    },
    methods:{
        async filterData(idx){
            if (idx==1){
                for (var i in this.bigram){
                    i.word
                }
            }
        },
        getColor(idx){
            if (idx <30) return "red lighten-2"
            else if (idx<60) return "indigo"
            else return "black"
        }
    }
}
</script>
