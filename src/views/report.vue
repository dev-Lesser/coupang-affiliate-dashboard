<template>
    <v-container fluid grid-list-md>
        
        <v-layout wrap style="justify-content: start;display: contents;">
            <v-card-actions>
                
            <v-flex xs12 sm6 md3>
            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                min-width="290px"
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="selectedDate"
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
                    :max="maxDate"
                    :min="minDate"
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
            <v-card-title>{{selectedDate}} 분석보고서 일람</v-card-title>
        </v-layout>
        <v-divider/>
        <v-layout wrap style="display:flex;">
            <v-flex xs12 sm6 md3 v-for="i,key in themeList" :key="i.theme">
                <router-link :to="defaultRoute+key+`?theme=${i.theme}&date=${selectedDate}`" @click.native="scrollToTop()">
                    <v-card class="ma-3">
                        <v-img :src="imageList[key]" :aspect-ratio="3"/>
                        <v-layout wrap >
                            <div style="width:90%;">
                                <v-card-title>{{i.theme}}</v-card-title>
                                <v-card-subtitle><v-chip small class="ma-1" outlined >{{selectedDate}} </v-chip>키워드 분석보고서
                                <v-progress-circular
                                    indeterminate
                                    color="indigo"
                                    v-if="loading"
                                    ></v-progress-circular>
                                </v-card-subtitle>
                            </div>
                        </v-layout>
                    </v-card>
                </router-link>
            </v-flex>
        </v-layout>
        <v-divider/>
     
    </v-container>
</template>

<script>
    export default {
        setup() {
        },
        data() {
            return {
                loading:false,
                picker: null,
                defaultRoute: '/report/',
                status: null,
                result: null,
                date: null,
                maxDate: null,
                minDate: new Date(2021,4,29).toISOString().substr(0, 10),
                menu: false,
                
            }
        },
        async created(){
            this.scrollToTop()
            var now = new Date();
            var yesterday = new Date();
            yesterday.setDate(now.getDate() - 1);
            
            this.maxDate = yesterday.toISOString().substr(0, 10)
            this.date = this.maxDate
        },

        computed:{
            imageList(){
                return this.$store.state.imgList;
            },
            themeList(){
                return this.$store.state.themeList;
            },
            selectedDate(){
                return this.$store.state.selectedDate;
            }
        },
        methods:{
            scrollToTop() {
                window.scrollTo(0,0);
            },
            delayTime(){
                this.loading=false;
            },
            saveDate(val){
                // this.date=val;
                this.loading=true;
                this.$store.state.selectedDate = val;

                this.menu = false;
                setTimeout(this.delayTime, 500); 


            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none
    }
</style>