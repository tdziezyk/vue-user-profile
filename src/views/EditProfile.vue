<template>
  <edit-form />
</template>

<script lang="ts">
import Vue from "vue";
import EditForm from "../components/EditForm.vue";

export default Vue.extend({
  name: "EditProfile",

  components: {
    EditForm,
  },
});
</script>
