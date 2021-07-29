<template>
  <div class="date-picker">
    <v-menu
      v-model="isMenuOpen"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          :value="value"
          label="Birthday date"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        :value="value"
        :active-picker.sync="activeStep"
        :max="
          new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10)
        "
        min="1900-01-01"
        @change="onSave"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ref, watch } from "@vue/composition-api";

export default Vue.extend({
  name: "DatePicker",
  setup(prop, { emit }) {
    const isMenuOpen = ref(false);
    const activeStep = ref("YEAR");

    const onSave = (selectedDate: string) => {
      isMenuOpen.value = false;
      emit("input", selectedDate);
    };

    watch(
      isMenuOpen,
      (isOpen) => isOpen && setTimeout(() => (activeStep.value = "YEAR"), 0)
    );

    return {
      isMenuOpen,
      activeStep,
      onSave,
    };
  },
  props: {
    value: String,
  },
});
</script>
<style lang="scss" scoped>
.date-picker {
  padding-top: 20px;
}
</style>
