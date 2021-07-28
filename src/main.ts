import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCompositionAPI from "@vue/composition-api";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib";

Vue.use(VueCompositionAPI);
Vue.use(VueTelInputVuetify, {
  vuetify,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
