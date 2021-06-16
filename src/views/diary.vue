<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10 >
                <v-card flat>
                    <v-card-title>
                    📰 랫서의 하루를 정리합니다 📰
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs12 sm10 md10 >
                <diary-table />
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import DiaryTable from '@/components/DiaryTable'
export default {
    setup() {
        
    },
    components:{
        DiaryTable
    },
    head: {
            title: {
                inner: '렛서의 하루',

                separator: '|',
                complement: '빅데이터 분석 인공지능 쇼핑가이드'
            },
            meta: [
                { name: 'description', content: '인공지능 봇 렛서의 하루를 정리합니다' },
                { name: 'description', content: '렛서의 추천상품은 어떻게 분석했는지, 간단하게 소개해드려요' },
                { name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no' },
                { charset: 'utf-8' },
                { property: 'og:type', content: 'website' },
            ],
            
        },
}
</script>