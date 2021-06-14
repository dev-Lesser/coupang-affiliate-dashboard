<template>
<a  class="item-card" target="_blank" :href="item.link" replace>
    <v-card >
            <v-img 
            :src="item.img"
            aspect-ratio="1.5"
            />
            <v-divider />
            <v-card-subtitle class="item-label">{{item.label}}</v-card-subtitle>
            <v-divider />
            <v-card-subtitle>
                
                <!-- <v-chip class="ma-1" small outlined>{{hashtags[key]}}</v-chip> -->
                <v-spacer></v-spacer>
                <v-chip class="ma-1" outlined small>{{item.price}}원</v-chip>
            </v-card-subtitle>
            <v-divider />
            <v-card-actions style="display:flex;">
                
                <v-spacer />
                <v-card-actions >
                    <v-btn small color="indigo" dark outlined :href="item.link" target="_blank" >
                        <v-icon small class="mr-3" >mdi-shopping</v-icon>구매하기
                    </v-btn>
                        
                </v-card-actions>
            </v-card-actions>
            
        </v-card>
</a>
</template>
<script>
export default {
    setup() {
        
    },
    props:{
        item: Object,
    },
    mounted(){
    },
    methods:{
        openNewBrowser(link){
            window.open(link, '_blank');
            return link
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
    text-overflow: ellipsis;
    white-space: nowrap;
    
}
.item-card{
    text-decoration:none
}
</style>