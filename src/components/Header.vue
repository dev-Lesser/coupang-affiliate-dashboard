<template>
    <v-app-bar
      app
      color="#6A76AB"
      dark
      height="200"
      :src="img"
    >
    <template v-slot:img="{ props }">
        <v-img
        v-bind="props"
        gradient="to top right, rgb(0, 36, 50, .7), rgb(0, 0, 0, .7)"
        ></v-img>
    </template>
      
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
      img: homeImg
    }
  }
}
</script>
<style scoped>
#top-section{
  background: linear-gradient( to right, rgb(57, 36, 14, .5), rgb(35, 32, 17, .5));
}
</style>