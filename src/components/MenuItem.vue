<template>
  <v-list-item
    :to="{ name: routeName }"
    exact-active-class="active-link"
    class="white--text"
  >
    <v-list-item-icon>
      <v-icon class="menu-icon">{{ icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ label }}</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MenuItem",
  setup() {
    return {};
  },
  props: {
    routeName: String,
    icon: String,
    label: String,
  },
});
</script>
<style lang="scss" scoped>
.v-icon.menu-icon {
  color: white;
}

.active-link {
  background: var(--v-primary-lighten1);
}
</style>
