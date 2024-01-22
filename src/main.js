import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import buttonHandleMixin from '../mixins/buttonHandleMixin';
import VueNativeSock from 'vue-native-websocket';
import Vue from 'vue';

Vue.use(VueNativeSock, 'ws://your-spring-backend-url/ws', {
  format: 'json',
  reconnection: true,
  reconnectionAttempts: 5,
});

const app = createApp(App);
app.mixin(buttonHandleMixin);
app.use(router);
app.mount('#app');