<template>
<div>
    <v-card-subtitle >
        잘 보셨나요? 😻
    </v-card-subtitle>
    <v-card-subtitle >
        <v-chip class="ma-2" v-for="i,key in keyword" color="primary" label :key="key">#{{i}}</v-chip> <br/>키워드가 다른 분들도 많이 관심이 있는 것으로 보이네요 <br/><br/><br/>
    </v-card-subtitle>
    <v-card-subtitle style="disp">
        여러분의 특별한 상품으로 
        <v-chip class="ma-2" v-for="i,key in keyword" color="primary" label :key="key">#{{i}}</v-chip>  <br/> 관련상품을 구입해 보시는 건 어떤가요??👀 <br/><br/><br/>
    </v-card-subtitle>
    <v-card-subtitle style="display:inherit;justify-content:center;align-items:center;">
        <div>물론 여러분만의</div> <v-chip class="ma-2" dark small color="red">특별한 상품</v-chip><div>을 위해 저는 더욱 더 열심히 일하겠습니다. 💪</div><br/><br/><br/><br/><br/><br/><br/><br/>
    </v-card-subtitle>
    <v-card-subtitle >
        그럼 이만 다음에 볼게요~👋><br/><br/><br/><br/>
    </v-card-subtitle>
    <v-card-actions>
        <v-spacer/>
        <v-btn :to='beforePage' text outlined small color="indigo">목록으로</v-btn>
    </v-card-actions>
        
    
    
</div>
</template>
<script>
export default {
    data() {
        return{
            beforePage:'/report',
        }
        
    },
    props:{
        keyword: Array
    }
    
}
</script>