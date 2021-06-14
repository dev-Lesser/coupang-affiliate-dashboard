<template>
  <v-app>
    <Header />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import { getTheme } from '@/assets/api'
export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    test:null,
    status:null,
  }),
  async created(){
    
    
    if (!this.themeList){
      const [success, themes] = await getTheme()
      if (success) {
          this.status = 1;
          this.$store.state.themeList = themes;
      } else {
          this.status = -1;
      }
      console.log('api')
    }
  },
  // SEO
  // metaInfo: {

  //   title: this.board.title,

  //   titleTemplate: '%s | www.ex.com', // title 뒤에 붙일 공통된 이름 (주로 사이트이름) 

  //   htmlAttrs: {

  //     lang: window.getApp.$i18n.locale // i18n 사용하지 않는 경우 직접 입력

  //   },

  //   meta: [

  //     { charset: 'utf-8'},

  //     // SEO setting

  //     { name: 'description', content: String(this.board.contents).slice(0, 320), vmid: 'description'},

  //     { name: 'keywords', content: this.board.keywords},

  //     { name: 'author', content: this.board.author},

  //     // SNS 용

  //     {

  //       property: 'og:title',

  //       content: this.board.title,

  //       template: chunk => `${chunk} | www.ex.com`,

  //       vmid: 'og:title'

  //     },

  //     // mobile

  //     { name: 'viewport', content: 'width=device-width, initial-scale=1'}

  //   ]

  // }

};
</script>
