<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app color="primary">
      <v-list nav dense>
        <menu-item
          routeName="EditProfile"
          icon="mdi-account-edit-outline"
          label="Edit profile"
        />
        <menu-item
          routeName="ProfilePreview"
          icon="mdi-account-outline"
          label="View profile"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <app-logo />
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
import MenuItem from "@/components/MenuItem.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppLogo from "@/components/AppLogo.vue";
import { loadUserData, saveUserData } from "@/helpers/userDataHelper";
import { UserData } from "./@types/UserData";

export default Vue.extend({
  name: "App",
  components: {
    AppFooter,
    MenuItem,
    AppLogo,
  },

  data: () => ({
    drawer: null,
  }),
});

// add event listener for testing avatar
window.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.ctrlKey && event.key === "z") {
    const userData = loadUserData() || ({ avatarUrl: "" } as UserData);
    const TEST_AVATAR = "/assets/avatar/avatar-1x.jpg";

    if (userData.avatarUrl === TEST_AVATAR) {
      userData.avatarUrl = "";
      saveUserData(userData);
      console.log("Data restored.");
    } else {
      userData.avatarUrl = TEST_AVATAR;
      saveUserData(userData);
      console.log("Refresh the page to check the avatar on edit page!");
    }
  }
});
</script>

<style lang="scss" scoped>
.main-and-footer-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;

  & > .v-mine {
    flex-grow: 1;
  }
}
</style>
