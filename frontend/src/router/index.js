import Vue from 'vue';
import Router from 'vue-router';
import { loadView, loadComponent } from '@/utils/loadPage.js';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'Main',
      component: loadComponent('Main', 'Main'),
    },
    {
      path: '*',
      name: 'NotFound',
      component: loadView('NotFoundPage'),
    },
  ]
})