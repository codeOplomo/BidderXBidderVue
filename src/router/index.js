import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

import WelcomePage from '@/components/HelloWorld.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';
import LoginForm from '@/components/auth/LoginForm.vue';
import DashMin from '@/components/admin/DashBoard.vue';
import DashProfile from '@/components/admin/DashProfile.vue';
import DashAuctions from '@/components/admin/DashAuctions.vue';
import DashBids from '@/components/admin/DashBids.vue';
import DashCategory from '@/components/admin/DashCategory.vue';
import DashProduct from '@/components/admin/DashProduct.vue';
import DashUsers from '@/components/admin/DashUsers.vue';
import Unauthorized from '@/components/Unauthorized.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: WelcomePage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
  },
  {
    path: '/admin/DashBoard',
    name: 'DashMin',
    component: DashMin,
    meta: { requiresAuth: true, role: 'admin' },
  },
  /*{
    path: '/owner/profile',
    name: 'OwnerProfile',
    component: OwnerProfile, // Import OwnerProfile component at the top
    meta: { requiresAuth: true, role: 'owner' },
  },
  {
    path: '/bidder/profile',
    name: 'BidderProfile',
    component: BidderProfile, // Import BidderProfile component at the top
    meta: { requiresAuth: true, role: 'bidder' },
  },*/
  {
    path: '/profile',
    name: 'Profile',
    component: DashProfile, // Make sure you import the Profile component at the top
    // Optional: Add meta fields if you require authentication or other checks
    meta: { requiresAuth: true }
  },
  { path: '/auctions', component: DashAuctions, meta: { requiresAuth: true }},
  { path: '/bids', component: DashBids, meta: { requiresAuth: true }},
  { path: '/categories', component: DashCategory, meta: {requiresAuth: true} }, // It might make more sense to have this under '/categories'
  { path: '/product', component: DashProduct, meta: {requiresAuth: true}},
  { path: '/users', component: DashUsers, meta: {requiresAuth: true}},
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: Unauthorized,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const userRole = store.getters.userRole; // Example getter to get the user's role

  if (requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (requiresAuth && to.meta.role && to.meta.role !== userRole) {
    next('/unauthorized');
  } else {
    next();
  }
});


export default router;
