import { createRouter, createWebHistory } from 'vue-router';

// Import components
import WelcomePage from '@/components/HelloWorld.vue';
import RegisterForm from '@/components/RegisterForm.vue';
import LoginForm from '@/components/LoginForm.vue';


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
  // Define more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
