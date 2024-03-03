import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HelloWorld.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/auth/RegisterForm.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/auth/LoginForm.vue'),
  },
  {
    path: '/admin/DashBoard',
    name: 'DashMin',
    component: () => import('@/components/admin/DashBoard.vue'),
    meta: { requiresAuth: true, role: 'admin' },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/components/admin/DashProfile.vue'),
    meta: { requiresAuth: true, role: 'admin' }
  },
  {
    path: '/auctions',
    name: 'Auctions',
    component: () => import('@/components/admin/DashAuctions.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/bids',
    name: 'Bids',
    component: () => import('@/components/admin/DashBids.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/components/admin/DashCategory.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/components/admin/DashProduct.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/components/admin/DashUsers.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile-duplicate',
    name: 'ProfileDuplicate',
    component: () => import('@/components/admin/DashProfileDuplicate.vue'),
    meta: { requiresAuth: true, role: 'admin' }
  },
  {
    path: '/unauthorized',
    name: 'UnauthorizedPage',
    component: () => import('@/components/UnauthorizedPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const hasRole = store.getters.hasRole;

  if (requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (requiresAuth && to.meta.role && !hasRole(to.meta.role)) {
    next('/unauthorized');
  } else {
    next();
  }
});



export default router;
