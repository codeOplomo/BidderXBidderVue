import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null, // Will store the user object
    isAuthenticated: false,
    token: null, // To store the authentication token
    roles: [], // To store user roles
  },
  mutations: {
    // Mutation to set user data upon login
    setUserData(state, userData) {
      state.user = userData.user;
      state.token = userData.token;
      state.isAuthenticated = true;
      state.roles = userData.user.roles; // Assume roles array is included in userData
      localStorage.setItem('token', userData.token); // Optionally store the token in localStorage
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    },
    // Mutation to clear user data upon logout
    clearUserData(state) {
      localStorage.removeItem('token');
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.roles = [];
      delete axios.defaults.headers.common['Authorization'];
    },
  },
  actions: {
    // Action to handle user login
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('/login', credentials);
        commit('setUserData', response.data); // Commit user data to the state
      } catch (error) {
        console.error('Login error:', error);
        // Handle error, e.g., show an error message
      }
    },
    // Action to handle user logout
    logout({ commit }) {
      commit('clearUserData'); // Clear user data from the state
    },
  },
  getters: {
    // Getter to access the authentication status
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    // Getter to access the user's role IDs
    roleIds(state) {
      return state.roles.map(role => role.pivot.role_id); // Extract role_ids from the roles array
    },
    // Getter to check if the user has a specific role
    hasRole: (state) => (roleId) => {
      return state.roles.some(role => role.pivot.role_id === roleId);
    },
    // Example Vuex getter for userRole
      userRole(state) {
        // Assuming the user object has a roles array
        return state.user?.roles[0]?.name; // Adjust based on your user object structure
      },
    fullName(state) {
      if (state.user) {
        return `${state.user.firstname} ${state.user.lastname}`;
      }
      return '';
    },

  },
});
