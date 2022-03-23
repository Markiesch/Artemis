import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import { initDonations } from "./data/donations";

initDonations();

createApp(App).use(Router).mount("body");
