<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;">
            <v-flex xs12 sm6 md3 v-for="i,key in themeList" :key="i.theme">
                <router-link :to="defaultRoute+key+'?theme='+i.theme">
                    <v-card class="ma-3">
                        <v-img src='https://picsum.photos/500/300?image=1' :aspect-ratio="3"/>
                        <v-layout wrap >
                            <div>
                                <v-card-title>{{i.theme}}</v-card-title>
                                <v-card-subtitle>6월2주차 쇼핑 분석보고서</v-card-subtitle>
                            </div>
                        </v-layout>
                    </v-card>
                </router-link>
            </v-flex>
        </v-layout>
        <v-layout wrap>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        setup() {
        },
        data() {
            return {
                defaultRoute: '/report/',
                status: null,
                result: null,
                
            }
        },
        async created(){
            
        },
        async mounted(){
        },
        computed:{
            themeList(){
                return this.$store.state.themeList;
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none
    }
</style>