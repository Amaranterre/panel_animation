import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import EditView from "/src/views/EditView.vue";
import ProfileView from "/src/views/ProfileView.vue";
import CategoryView from "/src/views/CategoryView.vue";
import RankView from "/src/views/RankView.vue";
import LevelView from "/src/views/LevelView.vue";
import AdminView from "/src/views/AdminView.vue";
import AboutView from "/src/views/AboutView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:id?',
      name: 'Category',
      component: CategoryView,
      props: true
    },
    {
      path: '/level/:id',
      name: 'Level',
      component: LevelView,
      props: true
    },
    {
      path: '/rank',
      name: 'Rank',
      component: RankView
    },
    {
      path: '/edit/:id?',
      name: 'Edit',
      component: EditView,
      props: true
    },
    {
      path: '/profile/:id?',
      name: 'Profile',
      component: ProfileView,
      props: true
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ]
})

export default router
