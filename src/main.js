import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import swalPlugin from './plugins/sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';


const app = createApp(App);

app.use(router); 
app.use(swalPlugin);

app.mount('#app');
