<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10 >
                <v-card>
                    <v-card-title>Hi 😃 👋 </v-card-title>
                    <v-card-subtitle>
                        렛하! 안녕하세요 👋 <br/><br/>
                        빅데이터 분석 기반으로
                        구매하는 상품에 대해 지표를 제시하여, 자신만의 특별한 상품을 구매할 수 있도록 저 "렛서" 가 도와드립니다. <br/>
                        
                        많이 구입한 상품들과 연관되는 키워드를 분석합니다. 워드클라우드와 네트워크맵을 보여드립니다.
                    </v-card-subtitle>
                    <v-divider />
                    <v-card-title>분석 데이터 테마</v-card-title>
                    <v-divider/>
                    
                    <v-layout wrap style="padding-left:50px;padding-right:50px;display:flex;justify-content:center;align-items:center;">
                        <v-flex xs12 sm6 md3 v-for="i,key in info" :key="key">
                           <about-info :img="i.img" :title="i.title" :hashtags="i.tags"/>
                        </v-flex>
                    </v-layout>
                    <v-divider />
                    
              
                    
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout wrap>

        </v-layout>
    </v-container>
</template>

<script>
import AboutInfo from '@/components/AboutInfo'
export default {
    
    components:{
        AboutInfo
    },
    data(){
        return{
            info: [{title:'집들이',img:'@/assest/home_present.jpg',tags:['집들이']}]
        }
    }
}
</script>