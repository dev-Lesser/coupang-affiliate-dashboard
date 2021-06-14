<template>
    <v-layout style="display:flex;justify-content:center;">
        <v-flex xs12 md6 sm6>
            <v-card class="ma-3">
                <v-img 
                :aspect-ratio="5" 
                :src="presentImg" />
                <v-card-subtitle>
                    직접 검색을 해보세요! ⛵
                
                <iframe src="https://coupa.ng/b1Ez6v" width="100%" height="75" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
                </v-card-subtitle>
                <v-card-subtitle>
                    추천 키워드 들입니다.<br/>
                    <v-divider class="my-2"/>
                    <v-chip class="ma-1" small dark label v-for="i,key in randomData" :key="key">#{{ i }}</v-chip>
                </v-card-subtitle>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
import presentImg from '@/assets/present.jpg'
export default {
    
    data() {
        return {
            presentImg: presentImg,
        }
        
    },
    props:{
        randomData: Array
    }
}
</script>