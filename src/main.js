import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router
import store from './store'; // Import store
import swalPlugin from './plugins/sweetalert2'; // SweetAlert plugin for Vue
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// Axios default configuration
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Create Vue application
const app = createApp(App);

// Use plugins and libraries
app.use(store);
app.use(router);
app.use(swalPlugin);

// Mount the app
app.mount('#app');
