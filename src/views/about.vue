<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10 >
                <v-card>
                    <v-card-title>Hi 😃 👋 </v-card-title>
                    <v-card-subtitle>
                        렛하! 안녕하세요 👋 <br/><br/>
                        빅데이터 분석 기반으로
                        구매하는 상품에 대해 지표를 제시하여, 자신만의 특별한 상품을 구매할 수 있도록 저 "렛서" 가 도와드립니다. 🚅 <br/><br/>
                        
                        많이 구입한 상품들과 연관되는 키워드를 분석해 드려요! 🍩 🍰<br/><br/>
                        그리고 워드클라우드와 네트워크맵을 보여드려서 좀 더 멋진 결과를 찾으실 수 있어요!.🚙<br/>
                    </v-card-subtitle>
                    <v-divider />
                    <v-card-title>분석 데이터 테마</v-card-title>
                    <v-divider/>
                    
                    <v-layout wrap style="display:flex;justify-content:center;align-items:center;">
                        <v-flex xs12 sm6 md3 v-for="i,key in info" :key="key">
                            <router-link class="item-card" to="/report"><about-info :img="imgList[key]" :title="i.title" :hashtags="i.tags"/></router-link>
                        </v-flex>
                    </v-layout>
                    <v-divider />
                    
            
                    
                </v-card>
            </v-flex>
        </v-layout>

      
    </v-container>
</template>

<script>
import AboutInfo from '@/components/AboutInfo'
export default {
    
    components:{
        AboutInfo
    },
    head: {
            title: {
                inner: '렛서의 하루',

                separator: '|',
                complement: '빅데이터 분석 인공지능 쇼핑가이드'
            },
            meta: [
                { name: 'description', content: '인공지능 봇 "렛서"의 소개' },
                { name: 'description', content: '인공지능 렛서의 카테고리별 추천상품을 알려드려요' },
                { name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no' },
                { charset: 'utf-8' },
                { property: 'og:type', content: 'website' },
            ],
            
        },
    data(){
        return{
            info: [
                {title:'결혼',tags:['결혼','축하']},
                {title:'부모',tags:['부모님','효도']},
                {title:'생일',tags:['생일선물']},
                {title:'여자친구',tags:['여자친구','커플']},
                {title:'집들이',tags:['집들이']},
                {title:'출산',tags:['아기']}]
        }
    },
    computed:{
        imgList(){
            return this.$store.state.imgList;
        }
    }
}
</script>
<style scoped>
.item-card{
    text-decoration:none
}
</style>