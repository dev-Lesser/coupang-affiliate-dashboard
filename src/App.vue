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
import weddingImg from '@/assets/wedding.jpg'
import babyImg from '@/assets/baby.jpg'
import girlImg from '@/assets/girlfriend.jpg'
import birthdayImg from '@/assets/present.jpg'
import homeImg from '@/assets/home_present.jpg'
import familyImg from '@/assets/family.jpg'
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
    this.$store.state.imgList =  [weddingImg,familyImg,birthdayImg,girlImg,homeImg,babyImg];
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

};
</script>
