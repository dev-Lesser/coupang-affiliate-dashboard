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
    }
}
</script>