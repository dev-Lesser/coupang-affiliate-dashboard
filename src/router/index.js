
import Vue from "vue";
import VueRouter from "vue-router";
import home from '@/views/home'
import report from '@/views/report'
import reportItem from '@/components/ReportView'
import diaryItem from '@/components/DiaryItem'
import about from '@/views/about'
import diary from '@/views/diary'
Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/report/:id',
      name: 'reportItem',
      component: reportItem
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/diary',
      name: 'diary',
      component: diary
    },
    {
      path: '/diary/:id',
      name: 'diaryItem',
      component: diaryItem
    },
  
    
];

const router = new VueRouter({
  routes
});
export default router;