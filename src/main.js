import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Parent from "./components/Parent";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import About from "./components/About";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  { path: "/", redirect: "/welcome" },
  { path: "/welcome", component: Welcome },
  { path: "/home", component: Home },
  { path: "/landing", component: Landing },
  { path: "/Parent", component: Parent },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
];

const router = new VueRouter({ routes, mode: "history" });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
