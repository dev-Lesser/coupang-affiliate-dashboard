
import Vue from "vue";
import VueRouter from "vue-router";
import home from '@/views/home'
import report from '@/views/report'
import reportItem from '@/components/ReportView'
import about from '@/views/about'
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
    
];

const router = new VueRouter({
  routes
});
export default router;