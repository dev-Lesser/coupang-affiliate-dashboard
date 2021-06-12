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
import { getAllData } from '@/assets/api.js'
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
    
    [this.status, this.$store.state.analysisData] = await getAllData('생일')
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
