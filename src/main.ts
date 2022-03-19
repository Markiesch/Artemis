import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import "./styles/variables.scss";
import "./styles/typography.scss";
import { initDonations } from "./data/donations";

initDonations();

createApp(App).use(Router).mount("body");
