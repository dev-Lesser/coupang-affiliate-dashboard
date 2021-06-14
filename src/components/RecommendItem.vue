<template>
<v-card flat>
    <v-card-title>제품 추천</v-card-title>
    <v-layout wrap style="border:solid;border-radius:10px;" class="pa-5">
        
        <v-layout style="width:100%;">
        <v-card-actions>
            <v-card-title> <v-btn small dark>#생일</v-btn> </v-card-title>
            <v-spacer />
            <v-card-subtitle>2021-06-04 부터 2021-06-11 분석 추천 상품</v-card-subtitle>
        </v-card-actions>
        </v-layout>
        <v-flex  xs12 sm6 md2 v-for="item,key in items" :key="key">
            <v-card >
                <v-img 
                :src="item.img"
                aspect-ratio="1.5"
                />
                <v-divider />
                <v-card-subtitle class="item-label">{{item.label}}</v-card-subtitle>
                <v-divider />
                <v-card-subtitle>
                    
                    <v-chip class="ma-1" small outlined>{{hashtags[key]}}</v-chip>
                    <v-spacer></v-spacer>
                    <v-chip class="ma-1" outlined small>{{item.price}}원</v-chip>
                </v-card-subtitle>
                <v-divider />
                <v-card-actions style="display:flex;">
                    
                    <v-spacer />
                    <v-card-actions >
                        <v-btn small color="indigo" dark outlined :href="item.link">
                            <v-icon small class="mr-3" >mdi-shopping</v-icon>구매하기
                        </v-btn>
                            
                    </v-card-actions>
                </v-card-actions>
                
            </v-card>
        </v-flex>
        
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
export default {
    setup() {
        
    },
    data(){
        return {
            // props 또는 axios 데이터가 되어야 함 -> cms 서버 필요//thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/06/01/15/5/a4625647-a04f-4e20-9711-974acf4e5e71.jpg
            items:[
                {"price":10000,"label": "구르메스 선물 케이크 티라미수, 인절미, 400g, 1","link":"https://coupa.ng/b1zwRm","img":"https://thumbnail12.coupangcdn.com/thumbnails/remote/212x212ex/image/vendor_inventory/bb6b/3e094589a665faeb33973ee61e28a331a332325c837242edcb42b5edc213.jpg"},
                {"price":20000,"label": "셀렉스 코어프로틴 음료 오리지널, 125ml, 14개", "link":"https://coupa.ng/b1zwRm",'img':"https://t4a.coupangcdn.com/thumbnails/remote/212x212ex/image/retail/images/596364932333825-2a9e6da4-3753-4045-9fcb-89da12d2b396.jpg"},
                {"price":30000,"label":"부케가르니 나드 샴푸, 1000ml, 2개" ,"link":"https://coupa.ng/b1zxM4",'img':"https://t5a.coupangcdn.com/thumbnails/remote/212x212ex/image/product/image/vendoritem/2019/09/05/4428105221/24558263-c24b-43ff-90a5-b381db810cd5.jpg"},
                {"price":30000,"label":"부케가르니 나드 샴푸, 1000ml, 2개" ,"link":"https://coupa.ng/b1CzZC",'img':"//thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/product/image/vendoritem/2019/03/04/3213757282/456ca43b-ffe6-46ef-b793-d787986a9e52.jpg"},
                {"price":30000,"label":"필라  티셔츠" ,"link":"https://coupa.ng/b1CDhL",'img':"//thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/164476685713491-fa7f1a75-d2dd-4058-b647-eda91ce58460.jpg"},
                {"price":30000,"label":"부케가르니 나드 샴푸, 1000ml, 2개" ,"link":"https://coupa.ng/b1zxM4",'img':"https://t5a.coupangcdn.com/thumbnails/remote/212x212ex/image/product/image/vendoritem/2019/09/05/4428105221/24558263-c24b-43ff-90a5-b381db810cd5.jpg"},
                {"price":30000,"label":"부케가르니 나드 샴푸, 1000ml, 2개" ,"link":"https://coupa.ng/b1zxM4",'img':"https://t5a.coupangcdn.com/thumbnails/remote/212x212ex/image/product/image/vendoritem/2019/09/05/4428105221/24558263-c24b-43ff-90a5-b381db810cd5.jpg"},
                {"price":30000,"label":"부케가르니 나드 샴푸, 1000ml, 2개" ,"link":"https://coupa.ng/b1zxM4",'img':"https://t5a.coupangcdn.com/thumbnails/remote/212x212ex/image/product/image/vendoritem/2019/09/05/4428105221/24558263-c24b-43ff-90a5-b381db810cd5.jpg"},
                ],
            hashtags:["#생일", "#카드", "#지갑"]
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