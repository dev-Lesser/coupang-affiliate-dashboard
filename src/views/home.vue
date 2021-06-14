<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            
            <v-flex xs12 sm10 md10>
                
                <v-card >
                    <v-card-title>현재 진행중인 이벤트/프로모션</v-card-title>
                    <v-card-subtitle>**파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있음</v-card-subtitle>
                    <v-divider/>
                </v-card>
                <v-card class="overflow-x-auto"  style="display:flex;">
                    <v-layout wrap>
                    <v-flex xs12 sm12 md4>
                        <a class="event-promotion-card" href="https://coupa.ng/b1Gcaz" target="_blank" >
                        <v-card-subtitle><v-btn small outlined>아이폰 SE/11 시리즈 빅 세일</v-btn>
                        
                        </v-card-subtitle>
                        </a>
                    </v-flex>
                    <v-divider/>
                    <v-flex xs12 sm12 md4>
                    <a class="event-promotion-card" href="https://coupa.ng/b1Gctx" target="_blank" >
                    <v-card-subtitle><v-btn small outlined>놓치면 후회하는 애플 세일</v-btn></v-card-subtitle>
                    </a>
                    </v-flex>
                    <v-flex xs12 sm12 md4>
                    <a class="event-promotion-card" href="https://coupa.ng/b1GcUh" target="_blank" >
                    <v-card-subtitle><v-btn small outlined>쿠폰할인, 세일할 때 쟁여두는 번들 아이템(~6/18)</v-btn></v-card-subtitle>
                    </a>
                    </v-flex>
                    <v-flex xs12 sm12 md4>
                    <a class="event-promotion-card" href="https://coupa.ng/b1GcYy" target="_blank" >
                    <v-card-subtitle><v-btn small outlined>2021년 상반기 뷰티 페스티벌(~6/27)</v-btn></v-card-subtitle>
                    </a>
                    </v-flex>
                    <v-flex xs12 sm12 md4>
                    <a class="event-promotion-card" href="https://coupa.ng/b1Gc3s" target="_blank" >
                    <v-card-subtitle><v-btn small outlined>간단하게 예뻐지는 네일/패디 SALE(~6/20)</v-btn></v-card-subtitle>
                    </a>
                    </v-flex>
                    </v-layout>
                </v-card>
                
                
            </v-flex>
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

<style scoped>
.event-promotion-card{
    text-decoration:none
}
</style>