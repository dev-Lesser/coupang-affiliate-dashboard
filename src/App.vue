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
  async mounted(){
  },
  computed:{
    analysisData(){
      return this.$store.state.analysisData;
    }
  }
};
</script>
