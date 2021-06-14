<template>
    <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md10 >
                
                    <v-card>
                        <iframe src="https://ads-partners.coupang.com/widgets.html?id=491018&template=carousel&trackingCode=AF0977183&subId=&width=680&height=140" width="680" height="140" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
                        <template>
                            <v-tabs
                            v-model="tab"
                            align-with-title
                            show-arrows
                            color="blue-grey darken-1"
                            >
                            <v-tab
                                v-for="item in tabItems"
                                :key="item.tab"
                            >
                                {{ item.tab }}
                            </v-tab>
                        </v-tabs>
                        </template>
                        <v-tabs-items v-model="tab">
                            <v-tab-item
                                v-for="item in tabItems"
                                :key="item.tab"
                            >
                            </v-tab-item>
                        </v-tabs-items>
                        
                    </v-card>
                
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    setup() {
        
    },
    data(){
        return{
            tab:null,
            tabItems:[
              {tab:'전자제품',route:"/"}, 
              {tab:'생활용품',route:"/about"},
              {tab:'주방용품',route:"/report"}, 
              {tab: '취미', route:"/category"},
              {tab: '',route:"/diary"},
              ],
        }
    }
}
</script>