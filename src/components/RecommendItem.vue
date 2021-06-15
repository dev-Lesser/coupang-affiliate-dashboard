<template>
<v-card flat class="pa-2">
    <!-- 가장 큰 타이틀 -->
    <v-card-title>랫서's Pick 추천</v-card-title>
    <v-layout class="pa-5" wrap>
        
        <v-card-subtitle><v-chip outlined small >{{selectedDate}}</v-chip> 분석 추천 상품</v-card-subtitle>
        <v-spacer/>
            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                min-width="290px"
                :max-width="300"
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
            
    </v-layout>
    <v-layout wrap  v-if="loading" style="display:flex; justify-content:center;">
        <v-progress-circular 
        indeterminate
        color="black">
        </v-progress-circular>
    </v-layout>
    
    <v-layout wrap style="border:solid;border-width: 1px;" v-if="noData" >
        <v-card-subtitle>
            💻 {{selectedDate}} 추천 상품은 분석 중에 있습니다. <br/>📈 다른일자를 선택해주세요 📅
        </v-card-subtitle>
    </v-layout>
    <v-layout wrap style="border:solid;border-width: 1px;border-radius:10px;"  v-for="item,key in $store.state.bestItems" :key="key" v-else >
        <v-flex xs12 sm12 md12 >
            <v-card-subtitle >테마 
            <v-chip label dark color="indigo"># {{item.theme}}</v-chip>
            </v-card-subtitle>
        </v-flex>
        <v-flex xs6 sm4 md2 v-for="product in item.product" :key="product.link">
            <display-item :item="product"/>
        </v-flex>
        <v-divider/>
    </v-layout>
    <v-layout>
        <v-card-actions style="display:flex;">
            <v-spacer />
            <v-card-subtitle>**파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있음</v-card-subtitle>
        </v-card-actions>
    </v-layout>
    
</v-card>
</template>

<script>
import {get_best_data} from "@/assets/api"
import DisplayItem from "@/components/DisplayItem"
export default {
    components:{
        DisplayItem
    },
 
    async created(){
        var now = new Date();
        var yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);
        
        now = yesterday.toISOString().substr(0, 10)
        this.$store.state.selectedDate = now

        console.log(now)
        this.$store.state.bestItems=null
        if (!this.$store.state.bestItems){
            this.loading=true;
            const [success, res] = await get_best_data(now)
            if (success){
                this.noData=false;
                this.$store.state.bestItems = res

            }
            else{
                this.noData=true;
            }
        }
        this.loading=false;
    },

    data(){
        return {
            loading:false,
            // props 또는 axios 데이터가 되어야 함 -> cms 서버 필요//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/01/15/5/a4625647-a04f-4e20-9711-974acf4e5e71.jpg
            noData: true,
            now:  new Date().toISOString().substr(0, 10),
            date: new Date().toISOString().substr(0, 10),
            maxDate: new Date().toISOString().substr(0, 10),
            minDate: new Date(2021,4,29).toISOString().substr(0, 10),
            menu: false,
        }
    },
    computed:{
         selectedDate(){
            return this.$store.state.selectedDate;
        },
        bestItems(){
            return this.$store.state.bestItems;
        }
    },
    methods:{
        async saveDate(val){
            // this.date=val;
            this.loading=true;
            this.$store.state.selectedDate = val;
            this.menu = false;
            this.$store.state.bestItems=null
            const [success, res] = await get_best_data(val)
            if (success){
                
                this.$store.state.bestItems = res
                this.noData=false;

            }
            else{
                this.noData=true;
            }

             this.loading=false;
        }
    }
    
}
</script>
<style scoped>
.item-label {
    width:100%;
    height:76px;
    color: red;
    overflow: hidden;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
}
</style>