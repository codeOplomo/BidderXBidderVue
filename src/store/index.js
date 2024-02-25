import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      role: null,
    },
  },
  mutations: {
    setUserRole(state, role) {
      state.user.role = role;
    },
  },
  actions: {},
  modules: {},
});
