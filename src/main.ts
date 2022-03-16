import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import "./styles/variables.scss";
import "./styles/typography.scss";
import "@vueform/slider/themes/default.css";

createApp(App).use(Router).mount("body");
