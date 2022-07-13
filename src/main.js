import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from 'primevue/config';

import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const app = createApp(App)
  .use(PrimeVue)
  .use(store)
  .use(router)

app.component('Carousel', Carousel);
app.component('Button', Button);
app.component('InputText', InputText);

app.mount("#app");
