import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./css/global.css";
import "./css/utilities.css";
import "./css/buttons.css";
import "./css/animations.css";
import "./css/responsive.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
