<template>
  <img
    class="app-logo"
    src="/img/logo-149w.png"
    alt="Profile App"
    srcset="
      img/logo-128w.png 128w,
      img/logo-149w.png 149w,
      img/logo-256w.png 256w,
      img/logo-298w.png 298w,
      img/logo-348w.png 348w,
      img/logo-447w.png 447w
    "
    sizes="(max-width: 959px) 128px, 149px"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppLogo",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.app-logo {
  height: 100%;
  padding-left: 10px;
}
</style>
