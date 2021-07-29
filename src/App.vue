<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app color="primary">
      <v-list nav dense>
        <v-list-item
          :to="{ name: 'EditProfile' }"
          exact-active-class="active-link"
          class="white--text"
        >
          <v-list-item-icon>
            <v-icon class="menu-icon">mdi-account-edit-outline </v-icon>
          </v-list-item-icon>
          <v-list-item-title>Edit profile</v-list-item-title>
        </v-list-item>
        <v-list-item
          :to="{ name: 'ProfilePreview' }"
          exact-active-class="active-link"
          class="white--text"
        >
          <v-list-item-icon>
            <v-icon class="menu-icon">mdi-account-outline </v-icon>
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

.menu-icon {
  color: white;
}
</style>
<style lang="scss">
.active-link {
  background: var(--v-primary-lighten1);
}
</style>
