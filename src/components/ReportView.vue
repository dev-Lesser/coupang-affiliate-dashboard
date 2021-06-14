<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            
            <v-flex xs12 sm10 md10 >
                <v-card>
                    <v-card-subtitle>
                    <v-btn :to="beforePage" small dark><v-icon small>mdi-arrow-left</v-icon>목록으로</v-btn>
                    </v-card-subtitle>
                    <v-card-actions>
                        
                        <v-card-title>
                            <v-chip class="ma-2" label dark> #{{ theme }}</v-chip> 👻 렛서의 분석! 
                            
                        </v-card-title>
                        <v-spacer/>
                        <v-card-subtitle>작성일자 : {{$route.query.date}}</v-card-subtitle>
                    </v-card-actions>
                    <v-divider />
                    <v-card-subtitle>
                        렛하~! <br/><br/>
                        오늘은  {{$route.query.date}} 입니다!!<br/><br/>
                        빅데이터로 당신의 쇼핑을 도와드리는 인공지능 봇 <strong>"렛서"</strong> 입니다. &#128539; <br/><br/><br/>
                        오늘 여러분께 필요한 상품은 어떤 것이 있을까요? 선물하는데 어떤 것을 사야 할 지 고민이 되시나요?? 🤖 <br/><br/><br/>
                        저 인공지능 "렛서" 는 다른 사람들의 블로그를 보고 어떠한 상품들을 구매했는지 선물 &#127873; 테마별로 제공해 드립니다.<br/><br/><br/>
                        <v-divider />
                    </v-card-subtitle>
                    <v-card-subtitle class="" style="justify-content:center;">
                        
                        <v-card-actions class="start-analysis-text">
                            <div style="justify-content:center;">
                                오늘의 분석은 두구두구두구.... &#128579; <br/><br/>
                                <v-progress-linear
                                :indeterminate="loading"
                                color="primary"
                                ></v-progress-linear><br/>
                                <div v-if="!loading">👩‍💻 분석완료! 👨‍💻</div>
                                <br/><br/><br/>
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
                        <v-layout wrap>
                            <v-flex xs12 md6 sm6>
                                <div class="analysis-top5-text" v-for="i,key in words" :key="key">
                                    
                                    <v-card-actions v-if="key<5" >
                                        <v-chip class="ma-1" color="primary"  outlined>
                                            {{ i[0]}}
                                        </v-chip> <v-chip class="ma-1" small outlined>{{ i[1]}}</v-chip>번 으로 {{key+1}} 위 입니다!! {{ emoji[Math.floor(Math.random() * (emoji.length))]}}
                                    </v-card-actions>
                                </div>  
                            </v-flex>
                            <v-flex xs12 md6 sm6>
                            <pie-chart 
                            :height="250"
                            :chartdata="[words[0][1],words[1][1],words[2][1],words[3][1],words[4][1]]" 
                            :title="'키워드집계'" 
                            :labels="[words[0][0],words[1][0],words[2][0],words[3][0],words[4][0]]" 
                            class='bar-chart-graph' />
                            </v-flex>
                        </v-layout>


                        <br/><br/>
                        <v-divider />
                        <v-card-subtitle>
                        💎💎 분석된 키워드를 바탕으로 저 "렛서"가 추천하는 상품은요~ 💎💎
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
                                        <v-chip class="ma-1" color="blue-grey"  outlined>
                                            {{ i.word.split('|')[0]}}{{ i.word.split('|')[1]}}
                                        </v-chip> <v-chip class="ma-1" small outlined>{{ i.num}}</v-chip>번 으로 {{key+1}} 위 입니다!! {{ emoji[Math.floor(Math.random() * (emoji.length))]}}
                                    </v-card-actions>
                                </div>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <div class="analysis-top5-text" v-for="i,key in trigram" :key="key">
                                    <v-card-actions v-if="key<5" >
                                        <v-chip class="ma-1" color="blue-grey" outlined>
                                            {{ i.word.split('|')[0]}}{{ i.word.split('|')[1]}}{{ i.word.split('|')[2]}} 
                                        </v-chip> <v-chip class="ma-1" small outlined>{{ i.num}}</v-chip>번 으로 {{key+1}} 위 입니다!!{{ emoji[Math.floor(Math.random() * (emoji.length))]}}
                                    </v-card-actions>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-card-subtitle>
                    <v-divider />
                    <v-card-subtitle>
                        마찬가지로 추천드리자면~~ 😍
                        </v-card-subtitle>
                        <v-layout wrap style="justify-content:center;display:flex;">
                            <v-flex xs6 sm4 md2 v-for="i,key in items" :key="key">
                                <display-item :item="i"/>
                            </v-flex>
                        </v-layout>
                    <v-divider />


                    
                    <v-layout style="display:flex;justify-content:center;">
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                        <v-card-subtitle>🤷 왜 이런 결과가 나왔을까요?❓⁉ <br/> 🤷‍♂️ 궁금하신분들을 위해, 아래 전체 분석 결과들을 보여드릴게요 🤖 <br/></v-card-subtitle>
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                    </v-layout>

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
                            <v-card class="pa-3 ma-3">
                                <v-card-subtitle> 
                                    <v-chip small outlined>#{{ theme }}</v-chip>  
                                    관련 빅데이터 워드클라우드
                                </v-card-subtitle>
                                <word-cloud :words="words" />
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-divider />


                    <!-- 쿠팡 검색 -->

                    <v-layout style="display:flex;justify-content:center;">
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                        <v-card-subtitle>🌹 제가 추천한 상품 말고도 다른 상품도 한번 검색해 보세요! 💁 <br/></v-card-subtitle>
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                    </v-layout>
                    <coupang-search-bar :randomData="randomItems" />
                    <v-divider />

                    <v-layout style="display:flex;justify-content:center;">
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                        <v-card-subtitle>🌹 모든 키워드 데이터를 보여드려요~ 💁 <br/></v-card-subtitle>
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                        <v-icon color="red lighten-2" large>mdi-arrow-down-bold</v-icon>
                    </v-layout>
                    <v-layout wrap style="display:flex;justify-content:center;">
                        <v-flex xs12 sm12 md4>
                            <v-card class="ma-3 pa-3 overflow-y-auto" height="400" max-height="400">
                                <v-card-title>이건 어떠세요? 🤖</v-card-title>
                                <v-divider class="mb-3" />
                                <v-card-subtitle style="display:flex;justify-content:center;" v-if="loading">
                                    <v-progress-circular
                                        indeterminate
                                        color="black"
                                    ></v-progress-circular>
                                </v-card-subtitle>
                                <a class="keyword-all-chips" href="https://coupa.ng/b1GAyJ" v-else target="_blank" >
                                <v-chip v-for="i,key in bigram" :key="key" class="ma-1" small outlined>
                                    {{ i.word.split('|')[0]+i.word.split('|')[1] }}
                                </v-chip>
                                </a>

                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm12 md4>
                            <v-card height="400" max-height="400" class="ma-3 pa-3 overflow-y-auto">
                                <v-card-title>다른 키워드와 조합! 😎</v-card-title>
                                <v-divider class="mb-3" />
                                <v-card-subtitle style="display:flex;justify-content:center;" v-if="loading">
                                    <v-progress-circular
                                        indeterminate
                                        color="black"
                                    ></v-progress-circular>
                                </v-card-subtitle>
                                <a class="keyword-all-chips" href="https://coupa.ng/b1GAyJ" v-else target="_blank" >
                                <v-chip v-for="i,key in trigram" :key="key"  class="ma-1" small  outlined>
                                    {{ i.word.split('|')[0]+i.word.split('|')[1] +i.word.split('|')[2] }}
                                    </v-chip>
                                </a>
                                    
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-divider />
                    <v-layout style="display:flex;justify-content:center;">
                        <final-message :keyword="keywordList " />
                    </v-layout>
                    
                </v-card>
            </v-flex>
            
        </v-layout>

        <v-layout wrap style="display:contents;justify-content:end;">
            <v-card-actions style="display:flex; ">
                <v-spacer />
                <div style="font-size:12px;">**파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있음</div>
            </v-card-actions>
        </v-layout>

    </v-container>
</template>
<script>
import NetworkChart from '@/components/NetworkChart'
import WordCloud from '@/components/WordCloud'
import DisplayItem from '@/components/DisplayItem'
import CoupangSearchBar from '@/components/CoupangSearchBar'
import PieChart from '@/components/PieChart'
import {getAllData} from '@/assets/api'
import FinalMessage from '@/components/FinalMessage'
export default {
    components:{
        NetworkChart,
        WordCloud,
        DisplayItem,
        CoupangSearchBar,
        PieChart,
        FinalMessage
    },
    data(){
        return {
            loading: false,
            theme: this.$route.query.theme,
            netNodes: [],
            netLinks: [],
            noData: false,
            beforePage:'/report',
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
            randomItems: [],
            keywordList: [],
        }
    },
    async created(){
        this.loading = true
        const [success, res] = await getAllData(this.theme, this.$route.query.date)
        if (success){
            this.noData=false;
            this.netNodes = res.network.nodes;
            this.netLinks = res.network.links;
            this.keyword = res.data.keyword;
            this.bigram = res.data.bigram;
            this.trigram = res.data.trigram
            for(var i of this.keyword){
                this.words.push([i.word, i.num])
                
            }
            for (var j=0;j<3;j++){
                this.randomItems.push(this.keyword[Math.floor(Math.random()*this.keyword.length)].word.replaceAll('|',''))
                this.randomItems.push(this.bigram[Math.floor(Math.random()*this.bigram.length)].word.replaceAll('|',''))
                this.randomItems.push(this.trigram[Math.floor(Math.random()*this.trigram.length)].word.replaceAll('|',''))
                this.keywordList.push(this.keyword[j].word)
            }
            this.loading= false;
            // this.words
        }
        else{
            this.noData=true
            this.loading=false;
        }
        

    },
    mounted(){

    },
    methods:{
        
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
    text-align: center;
}
.keyword-all-chips{
    text-decoration:none
}
</style>