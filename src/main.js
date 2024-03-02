import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import swalPlugin from './plugins/sweetalert2';
import axios from 'axios'; // Ensure axios is imported
import 'bootstrap/dist/css/bootstrap.min.css';

// Now you can safely set axios defaults
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

const app = createApp(App);
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

app.use(store);
app.use(router);
app.use(swalPlugin);

app.mount('#app');

