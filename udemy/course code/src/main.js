import { createApp, h } from 'vue';
import App from './App.vue' // importing the default export
import FriendContact from './components/FriendContact'

// used in Udemy course but wont work
// createApp({render: h => h(App),}).mount('#app');

const app  = createApp({
    render: ()=>h(App)
});

app.component('friend-component', FriendContact);
app.mount('#app');
