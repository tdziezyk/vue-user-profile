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

    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
      rhoncus turpis. Vestibulum ante tortor, gravida id consequat a, finibus et
      nulla. Nam id neque libero. Cras quis aliquam massa.
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    drawer: null,
  }),
});
</script>

<style lang="scss" scoped>
.logo {
  height: 100%;
}
</style>
