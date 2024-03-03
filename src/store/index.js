import { createStore } from 'vuex';
import axios from 'axios';

// Define your store
const store = createStore({
  state() {
    return {
      user: {},
      isAuthenticated: false,
      token: null,
      roles: [],
    };
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData.user;
      state.token = userData.token;
      state.isAuthenticated = true;
      state.roles = userData.user.roles;
      localStorage.setItem('token', userData.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    },
    clearUserData(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('store'); // Clear the store saved in localStorage
      state.user = {};
      state.token = null;
      state.isAuthenticated = false;
      state.roles = [];
      delete axios.defaults.headers.common['Authorization'];
    },
  },
  actions: {
    async fetchAdminData({ commit }) {
      try {
        const response = await axios.get('/admin/profile');
        commit('setUserData', response.data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('/login', credentials);
        commit('setUserData', response.data);
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    async logout({ commit }) {
      commit('clearUserData');
      // Perform any other logout logic here, e.g., informing the server
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    userRole(state) {
      return state.user.roles?.[0]?.name;
    },
    fullName(state) {
      // Construct full name from user object
      return state.user.firstname && state.user.lastname ? `${state.user.firstname} ${state.user.lastname}` : '';
    },
    hasRole: (state) => (roleName) => {
      return state.user && state.user.roles.some(role => role.name === roleName);
    },
  },
});

// Subscribe to store updates to save the state to localStorage

export default store;
