<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="justify-content: end;display: contents;">
            <v-card-actions>
                <v-spacer />
            <v-flex xs12 sm6 md3>
            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    label="날짜를 선택해주세요"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
                </template>
                    <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                    locale="kr"
                    color="blue-grey darken-3"
                    outlined
                    :max="date"
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="red"
                        @click="menu = false"
                    >
                        취소
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="saveDate(date)"
                    >
                        확인
                    </v-btn>
                </v-date-picker>
            </v-menu>
            </v-flex>
            </v-card-actions>
        </v-layout>
        <v-layout>
            <v-card-title>{{date}} 분석보고서 일람</v-card-title>
            
        </v-layout>
        <v-divider/>
        <v-layout wrap style="display:flex;">
            <v-flex xs12 sm6 md3 v-for="i,key in themeList" :key="i.theme">
                <router-link :to="defaultRoute+key+`?theme=${i.theme}&date=${selectedDate}`" >
                    <v-card class="ma-3">
                        <v-img :src="imageList[key]" :aspect-ratio="3"/>
                        <v-layout wrap >
                            <div>
                                <v-card-title>{{i.theme}}</v-card-title>
                                <v-card-subtitle>{{date}} 쇼핑 분석보고서</v-card-subtitle>
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
import weddingImg from '@/assets/wedding.jpg'
import babyImg from '@/assets/baby.jpg'
import girlImg from '@/assets/girlfriend.jpg'
import birthdayImg from '@/assets/present.jpg'
import homeImg from '@/assets/home_present.jpg'
import familyImg from '@/assets/family.jpg'
    export default {
        setup() {
        },
        data() {
            return {
                picker: null,
                defaultRoute: '/report/',
                status: null,
                result: null,
                date: new Date().toISOString().substr(0, 10),
                menu: false,
                imageList: [weddingImg,familyImg,birthdayImg,girlImg,birthdayImg,homeImg,babyImg],
                selectedDate: null,
                
            }
        },
        async created(){
            this.selectedDate = this.date
        },

        computed:{
            themeList(){
                return this.$store.state.themeList;
            }
        },
        methods:{
            saveDate(val){
                this.date=val;
                this.selectedDate = val;
                this.menu = false;

            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none
    }
</style>