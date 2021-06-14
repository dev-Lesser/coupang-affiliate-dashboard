<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10 >
                <v-card>
                    <v-card-title></v-card-title>
                    <v-btn dark> #{{ theme }}</v-btn>
                    <v-card-title> 분석보고서입니다.</v-card-title>
                    <v-divider />
                    <v-card-subtitle>
                        제하~! <br/><br/>
                        빅데이터로 당신의 쇼핑을 도와드리는 인공지능 봇 <strong>"랫서"</strong> 입니다. &#128539; <br/>
                        오늘 여러분께 필요한 상품은 어떤 것이 있을까요? 선물하는데 어떤 것을 사야 할 지 고민이 되시나요?? 🤖 <br/>
                        저 인공지능 "랫서" 는 다른 사람들의 블로그를 보고 어떠한 상품들을 구매했는지 선물 &#127873; 테마별로 제공해 드립니다.<br/><br/><br/>
                        <v-divider />
                    </v-card-subtitle>
                    <v-card-subtitle class="" style="justify-content:center;">
                        
                        <v-card-actions class="start-analysis-text">
                            <div style="justify-content:center;">
                                두구두구두구.... &#128579; <br/><br/><br/><br/><br/><br/>
                                &#128587; 하하하 오늘 분석한 결과는 이렇네요!!!<br/><br/><br/>
                                <v-chip outlined small>  #{{ theme }} </v-chip> 
                                에 관한 선물에 대해 다른 사람들이 어떤 것을 언급했는지 확인해 볼까요? &#128585;<br/><br/>
                            </div>
                        
                        </v-card-actions>
                        <v-divider />
                    </v-card-subtitle>
                    
                    <v-card-subtitle style="display:flex;justify-content:center;" v-if="loading">
                    <v-progress-circular
                        indeterminate
                        color="black"
                        
                        ></v-progress-circular>
                    </v-card-subtitle>
                    <v-card-subtitle v-else>
                        <v-card-subtitle>
                        먼저 많이 언급된 단어부터 볼까요~
                        </v-card-subtitle>
                        <div class="analysis-top5-text" v-for="i,key in words" :key="key">
                            
                            <v-card-actions v-if="key<5" >
                                <v-chip class="ma-1" color="primary" small outlined>
                                    {{ i[0]}}
                                </v-chip> <v-chip class="ma-1" small outlined>{{ i[1]}}</v-chip>번 으로 {{key+1}} 위 입니다!! {{ emoji[Math.floor(Math.random() * (emoji.length))]}}
                            </v-card-actions>
                        </div>
                        <br/><br/>
                        <v-divider />
                        <v-card-subtitle>
                        분석된 키워드를 바탕으로 저 "랫서" 추천 해드릴게요~
                        </v-card-subtitle>
                        <v-layout style="justify-content:center;display:flex;">
                            <v-flex xs6 sm4 md2 v-for="i,key in items" :key="key">
                                <display-item :item="i"/>
                            </v-flex>
                        </v-layout>
                            
                    </v-card-subtitle>
                    
                    <v-divider />
                    <!-- bigram trigram 부분 레이아웃 -->
                    <v-card-subtitle class="" style="justify-content:center;">
                        <v-card-subtitle>
                        그 다음은 어떤 단어들이 있을까요? 🤔
                        </v-card-subtitle>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md6>
                                <div class="analysis-top5-text" v-for="i,key in bigram" :key="key">
                                    <v-card-actions v-if="key<5" >
                                        <v-chip class="ma-1" color="blue-grey" small outlined>
                                            {{ i.word.split('|')[0]}}  {{ i.word.split('|')[1]}}
                                        </v-chip> <v-chip class="ma-1" small outlined>{{ i.num}}</v-chip>번 으로 {{key+1}} 위 입니다!! {{ emoji[Math.floor(Math.random() * (emoji.length))]}}
                                    </v-card-actions>
                                </div>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <div class="analysis-top5-text" v-for="i,key in trigram" :key="key">
                                    <v-card-actions v-if="key<5" >
                                        <v-chip class="ma-1" color="blue-grey" small outlined>
                                            {{ i.word.split('|')[0]}}  {{ i.word.split('|')[1]}} {{ i.word.split('|')[2]}} 
                                        </v-chip> <v-chip class="ma-1" small outlined>{{ i.num}}</v-chip>번 으로 {{key+1}} 위 입니다!!{{ emoji[Math.floor(Math.random() * (emoji.length))]}}
                                    </v-card-actions>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-card-subtitle>
                    <v-divider />
                    
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
                            <v-btn @click="filterBigram(1)">상위 키워드</v-btn>
                            <v-btn @click="filterBigram(2)">중위 키워드</v-btn>
                            <v-btn @click="filterBigram(3)">하위 키워드</v-btn>
                            <v-card class= "ma-3 pa-3">
                                <v-chip v-for="i,key in filterBigramData" :key="key" class="ma-1" small outlined>{{ i.word.split('|')[0]+i.word.split('|')[1] }}</v-chip>
                                <div v-if="filterBigramData==[]">
                                    데이터 선택/ 또는 없습니다.
                                </div>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm12 md4>
                            <v-btn @click="filterTrigram(1)">상위 키워드</v-btn>
                            <v-btn @click="filterTrigram(2)">중위 키워드</v-btn>
                            <v-btn @click="filterTrigram(3)">하위 키워드</v-btn>
                            <v-card class= "ma-3 pa-3">
                                
                                <v-chip v-for="i,key in trigram" :key="key"  class="ma-1" small  outlined>
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
import DisplayItem from '@/components/DisplayItem'
import {getAllData} from '@/assets/api'
export default {
    components:{
        NetworkChart,
        WordCloud,
        DisplayItem
    },
    data(){
        return {
            loading: false,
            theme: this.$route.query.theme,
            netNodes: [],
            netLinks: [],
            words:[],
            bigram:[],
            trigram:[],
            emoji:['😀','😜','😝','😁','😍','😸','🙉','🤩'],
            filterBigramData:[],
            filterTrigramData:[],
            items:[
                {"price":10000,"label": "구르메스 선물 케이크 티라미수, 인절미, 400g, 1","link":"https://coupa.ng/b1zwRm","img":"https://thumbnail12.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/bb6b/3e094589a665faeb33973ee61e28a331a332325c837242edcb42b5edc213.jpg"},
                {"price":30000,"label":"부케가르니 나드 샴푸, 1000ml, 2개" ,"link":"https://coupa.ng/b1zxM4",'img':"https://t5a.coupangcdn.com/thumbnails/remote/212x212ex/image/product/image/vendoritem/2019/09/05/4428105221/24558263-c24b-43ff-90a5-b381db810cd5.jpg"},
                {"price":30000,"label":"물, 1000ml, 2개" ,"link":"https://coupa.ng/b1CzZC",'img':"//thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/product/image/vendoritem/2019/03/04/3213757282/456ca43b-ffe6-46ef-b793-d787986a9e52.jpg"},
                {"price":30000,"label":"필라  티셔츠" ,"link":"https://coupa.ng/b1CDhL",'img':"//thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/164476685713491-fa7f1a75-d2dd-4058-b647-eda91ce58460.jpg"},
                ],
        }
    },
    async created(){
        this.loading = true
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
            this.loading= false;
            // this.words
        }
        

    },
    mounted(){
    },
    methods:{
        async filterBigram(idx){
            if (idx==1){
                this.filterBigramData = []
                for (var i=0;i<30;i++){
                    this.filterBigramData.push(this.bigram[i])
                }
            }
            else if (idx==2){
                this.filterBigramData = []
                for (i=30;i<60;i++){
                    this.filterBigramData.push(this.bigram[i])
                }
            }
            else{
                this.filterBigramData = []
                for (i=60;i<100;i++){
                    this.filterBigramData.push(this.bigram[i])
                }
            }
        },
        async filterTrigram(idx){
            if (idx==1){
                this.filterTrigramData = []
                for (var i=0;i<30;i++){
                    this.filterTrigramData.push(this.trigram[i])
                }
            }
            else if (idx==2){
                this.filterTrigramData = []
                for (i=30;i<60;i++){
                    this.filterTrigramData.push(this.trigram[i])
                }
            }
            else{
                this.filterTrigramData = []
                for (i=60;i<100;i++){
                    this.filterTrigramData.push(this.trigram[i])
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
<style scoped>
.start-analysis-text{
        display: flex;
    justify-content: center;
}
.analysis-top5-text{
    justify-content: center;
    display: flex;
    align-items: center;
    text-align: center;;}
</style>