<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;">
            <v-flex xs12 sm6 md4 v-for="i in 7" :key="i">
                <router-link :to="defaultRoute+i">
                    <v-card class="ma-3 pa-3">
                        <v-layout wrap style="display:flex;justify-content:center;">
                            <v-img src="https://picsum.photos/500/300?image=16" />
                            <v-card-title>ddd</v-card-title>
                            <v-card-title>6월2주차 쇼핑 분석보고서</v-card-title>
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
                defaultRoute: '/report/'
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none
    }
</style>