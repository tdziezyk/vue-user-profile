<template>
  <v-container>
    <v-form ref="form">
      <v-text-field
        v-model="userData.firstName"
        :error-messages="formErrors.firstName"
        :counter="formData.FIRST_NAME_LENGTH"
        label="First name"
        required
        @input="$v.firstName.$touch()"
        @blur="$v.firstName.$touch()"
      />
      <v-text-field
        v-model="userData.lastName"
        :error-messages="formErrors.lastName"
        :counter="formData.LAST_NAME_LENGTH"
        label="Last name"
        required
        @input="$v.lastName.$touch()"
        @blur="$v.lastName.$touch()"
      />
      <v-text-field
        v-model="userData.email"
        :error-messages="formErrors.email"
        :counter="formData.EMAIL_LENGTH"
        label="E-mail"
        type="email"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      />
      <vue-tel-input-vuetify
        v-model="userData.phone"
        defaultCountry="PL"
        mode="international"
        :error-messages="formErrors.phone"
        @input="onPhoneInput"
        @blur="$v.phone.$touch()"
      />
      <v-file-input
        @change="setAvatarPreview"
        v-model="userData.avatar"
        :error-messages="formErrors.avatar"
        label="Avatar"
        accept="image/png, image/jpeg, image/bmp"
        show-size
      />
      <v-row class="preview-wrapper">
        <v-avatar v-if="avatarPreview" color="grey" size="164">
          <v-img :src="avatarPreview" />
        </v-avatar>
      </v-row>
      <date-picker :value="userData.birthday" @input="onBirthday" />
      <v-textarea
        v-model="userData.about"
        :error-messages="formErrors.about"
        :counter="formData.ABOUT_LENGTH"
        :rows="3"
        label="A few words about you"
        @input="$v.about.$touch()"
        @blur="$v.about.$touch()"
      />
      <v-btn color="primary" @click="onSubmit">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { ref, computed } from "@vue/composition-api";
import useVuelidate from "@vuelidate/core";
import { required, email, maxLength, helpers } from "@vuelidate/validators";
import DatePicker from "./DatePicker.vue";
import { saveUserData, loadUserData } from "@/helpers/userDataHelper";
import { UserData } from "@/@types/UserData";

export default Vue.extend({
  name: "EditForm",
  components: {
    DatePicker,
  },
  setup() {
    const initUserData = loadUserData();

    const userData = ref({
      firstName: initUserData?.firstName || "",
      lastName: initUserData?.lastName || "",
      email: initUserData?.email || "",
      phone: initUserData?.phone || "",
      about: initUserData?.about || "",
      birthday: initUserData?.birthday || "",
      avatar: undefined,
    });
    const isPhoneValid = ref(false);
    const avatarPreview = ref("");

    const formData = ref({
      FIRST_NAME_LENGTH: 12,
      LAST_NAME_LENGTH: 15,
      EMAIL_LENGTH: 30,
      ABOUT_LENGTH: 256,
    });

    const rules = {
      firstName: {
        required,
        maxLength: maxLength(formData.value.FIRST_NAME_LENGTH),
      },
      lastName: {
        required,
        maxLength: maxLength(formData.value.LAST_NAME_LENGTH),
      },
      email: {
        required,
        maxLength: maxLength(formData.value.EMAIL_LENGTH),
        email,
      },
      phone: {
        numbersOnly: helpers.withMessage(
          "The number is invalid!",
          (): boolean => userData.value.phone.length == 0 || isPhoneValid.value
        ),
      },
      about: {
        maxLength: maxLength(formData.value.ABOUT_LENGTH),
      },
      avatar: {
        size: helpers.withMessage(
          "Avatar size should be less than 2 MB!",
          (value: any): boolean => {
            return !value || (value && value.size < 2000000);
          }
        ),
      },
    };

    const onPhoneInput = (_value: string, { valid }: { valid: boolean }) => {
      $v.value.phone.$touch();
      isPhoneValid.value = valid;
    };

    const onBirthday = (value: string) => {
      userData.value.birthday = value;
    };

    const $v = useVuelidate(rules, userData);

    const formErrors = computed(() => {
      return {
        firstName: $v.value.firstName.$errors.map((el) => el.$message),
        lastName: $v.value.lastName.$errors.map((el) => el.$message),
        email: $v.value.email.$errors.map((el) => el.$message),
        phone: $v.value.phone.$errors.map((el) => el.$message),
        about: $v.value.about.$errors.map((el) => el.$message),
        avatar: $v.value.avatar.$errors.map((el) => el.$message),
      };
    });

    const setAvatarPreview = () => {
      $v.value.avatar.$touch();

      if (userData.value.avatar && !formErrors.value.avatar.length) {
        avatarPreview.value = URL.createObjectURL(userData.value.avatar);
      } else {
        avatarPreview.value = "";
      }
    };

    const onSubmit = () => {
      $v.value.$touch();
      if ($v.value.$error) return;

      const { firstName, lastName, email, phone, about, birthday, avatar } =
        userData.value;
      const data: UserData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        about: about.trim(),
        birthday,
        avatar,
      };

      saveUserData(data);
    };

    return {
      $v,
      userData,
      formData,
      formErrors,
      onPhoneInput,
      onBirthday,
      isPhoneValid,
      avatarPreview,
      setAvatarPreview,
      onSubmit,
    };
  },
});
</script>
<style lang="scss" scoped>
.preview-wrapper {
}
</style>
