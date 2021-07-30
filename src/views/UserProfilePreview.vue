<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title class="justify-center profile-header"
        >User Profile</v-card-title
      >
      <v-list class="transparent" v-if="userData">
        <v-list-item class="justify-center">
          <v-avatar color="grey" size="128" v-if="userData.avatarUrl">
            <v-img
              :src="userData.avatarUrl"
              srcset="
                /assets/avatar/avatar-1x.jpg 1x,
                /assets/avatar/avatar-1_5x.jpg 1.5x,
                /assets/avatar/avatar-2x.jpg 2x,
                /assets/avatar/avatar-3x.jpg 3x"
            ></v-img>
          </v-avatar>
          <v-icon v-else class="no-avatar-image"
            >mdi-account-circle-outline</v-icon
          >
        </v-list-item>
        <v-list-item v-for="item in profileTextData" :key="item.label">
          <v-list-item-icon class="mr-3">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="user-data-label">{{
            item.label
          }}</v-list-item-title>
          <v-list-item-subtitle class="text-right user-data-value">
            {{ item.value }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-card-text v-else>
        No user data. Please go to the the edit profile page.
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { ref, computed } from "@vue/composition-api";
import { loadUserData } from "@/helpers/userDataHelper";

export default Vue.extend({
  name: "UserProfilePreview",
  setup() {
    const loadedUserData = loadUserData();
    const userData = ref(loadedUserData);
    const profileTextData = computed(() => {
      if (!userData.value) {
        return [];
      }
      const { firstName, lastName, email, phone, about, birthday } =
        userData.value;
      return [
        {
          icon: "mdi-account-outline",
          label: "First name",
          value: firstName,
        },
        { icon: "mdi-account-outline", label: "Last name", value: lastName },
        { icon: "mdi-email-outline", label: "Email", value: email },
        { icon: "mdi-phone-outline", label: "Phone", value: phone },
        {
          icon: "mdi-calendar-blank-outline",
          label: "Date of birth",
          value: birthday,
        },
        { icon: "mdi-note-outline", label: "About", value: about },
      ];
    });

    return {
      userData,
      profileTextData,
    };
  },
});
</script>
<style lang="scss" scoped>
.no-avatar-image {
  font-size: 128px;
}

.profile-header {
  color: var(--v-primary-lighten1);
}
.user-data-label {
  color: var(--v-secondary-lighten1);
}

.v-list-item__subtitle.user-data-value {
  color: var(--v-secondary-darken1);
}
</style>
