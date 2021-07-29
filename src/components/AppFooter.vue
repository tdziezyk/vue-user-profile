<template>
  <v-footer
    color="primary lighten-2 white--text"
    class="app-footer"
    app
    :absolute="false"
  >
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
      rhoncus turpis. Vestibulum ante tortor, gravida id consequat a, finibus et
      nulla. Nam id neque libero. Cras quis aliquam massa.
    </div>
    <div class="git-repo">
      <a :href="repoData.href" target="_blank"
        ><v-icon>mdi-github</v-icon> {{ repoData.name }}</a
      >
    </div>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import { ref } from "@vue/composition-api";

export default Vue.extend({
  name: "AppFooter",
  setup() {
    const repoData = ref({
      href: "https://github.com/tdziezyk/vue-user-profile",
      name: "vue-user-profile",
    });

    return {
      repoData,
    };
  },
});
</script>
<style lang="scss" scoped>
.app-footer {
  padding: 10px;

  a {
    color: white;
    text-decoration: none;

    i.v-icon {
      color: white;
    }
  }
}

.git-repo {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
