<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav dense>
        <v-list-item link :to="{ name: 'EditProfile' }">
          <v-list-item-icon>
            <v-icon>mdi-account-edit-outline </v-icon>
          </v-list-item-icon>
          <v-list-item-title>Edit profile</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'ProfilePreview' }">
          <v-list-item-icon>
            <v-icon>mdi-account-outline </v-icon>
          </v-list-item-icon>
          <v-list-item-title>View profile</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <img class="logo" src="./assets/logo.png" alt="Profile App" />
    </v-app-bar>

    <div class="main-and-footer-wrapper">
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
      <app-footer />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppFooter from "@/components/AppFooter.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppFooter,
  },

  data: () => ({
    drawer: null,
  }),
});
</script>

<style lang="scss" scoped>
.logo {
  height: 100%;
}

.main-and-footer-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
