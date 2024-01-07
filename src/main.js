import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import buttonHandleMixin from '../mixins/buttonHandleMixin';

const app = createApp(App);
app.mixin(buttonHandleMixin);
app.use(router);
app.mount('#app');