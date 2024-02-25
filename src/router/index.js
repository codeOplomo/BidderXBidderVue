import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

// Import components
// import WelcomePage from '@/components/HelloWorld.vue';
import WelcomePage from '@/components/admin/DashBoard.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';
import LoginForm from '@/components/auth/LoginForm.vue';
// import AdminDashboard from '@/components/admin/DashBoard.vue';
// import BidderProfile from '@/components/bidder/Profile.vue';
// import OwnerProfile from '@/components/owner/Profile.vue';


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
  // {
  //   path: '/admin/dashboard',
  //   name: 'AdminDashboard',
  //   component: AdminDashboard,
  //   meta: { requiresAuth: true, role: 'admin' },
  // },
  // {
  //   path: '/bidder/profile',
  //   name: 'BidderProfile',
  //   component: BidderProfile,
  //   meta: { requiresAuth: true, role: 'bidder' },
  // },
  // {
  //   path: '/owner/profile',
  //   name: 'OwnerProfile',
  //   component: OwnerProfile,
  //   meta: { requiresAuth: true, role: 'owner' },
  // },
  // Define more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// Navigation guard for role-based access
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const userRole = store.state.user.role; // Assuming your store has a state for user role

  if (requiresAuth && !userRole) {
    next('/login');
  } else if (requiresAuth && to.meta.role !== userRole) {
    next(from.path); // Redirect to previous page if role mismatch
  } else {
    next();
  }
});

export default router;



