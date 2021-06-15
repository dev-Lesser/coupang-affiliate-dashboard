<template>
    <v-app-bar
      app
      color="#6A76AB"
      dark
      :src="img"
    >
    <v-card-actions>
    <v-card-title>🚀 렛서의 하루</v-card-title>
    <v-spacer class="header-sub-text"/>
    <v-card-subtitle class="header-sub-text"> 👑 빅데이터 분석 인공지능 쇼핑가이드</v-card-subtitle>
    </v-card-actions>
    <template v-slot:img="{ props }">
        <v-img
        v-bind="props"
        gradient="to top right, rgb(0, 36, 50, .7), rgb(0, 0, 0, .7)"
        ></v-img>
    </template>
    <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
          show-arrows
        >
          <v-tab
            v-for="item in tabItems"
            :key="item.tab"
            :to="item.route"
            @click.native="scrollToTop()"
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
      
    </v-app-bar>
</template>
<script>
import homeImg from '@/assets/home.jpg'

export default {
  setup() {
    
  },
  data(){
    return {
      drawer: null,
      img: homeImg,
      tab: null,
      tabItems:[
              {tab:'HOME',route:"/"}, 
              {tab:'About',route:"/about"},
              {tab:'분석보고서',route:"/report"}, 
              {tab: '카테고리', route:"/category"},
              {tab: '렛서의 일기',route:"/diary"},
              ],
    }
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0,0);
    },
  }
}
</script>
<style scoped>
#top-section{
  background: linear-gradient( to right, rgb(57, 36, 14, .5), rgb(35, 32, 17, .5));
}

@media screen and (max-width: 500px) {
  .header-sub-text {
    display:none;
    width:0px;
  }
    
}
</style>