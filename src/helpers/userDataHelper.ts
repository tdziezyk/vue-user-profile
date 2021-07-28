import { UserData } from "@/@types/UserData";

const USER_DATA_KEY = "USER_DATA";

export const saveUserData = (data: UserData): void => {
  // because of the sessionStorage size limitation the avatar is not saved.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { avatar, ...dataToSave } = data;
  const dataAsJSON = JSON.stringify(dataToSave);
  sessionStorage.setItem(USER_DATA_KEY, dataAsJSON);
};

export const loadUserData = (): UserData | null => {
  const dataAsJSON = sessionStorage.getItem(USER_DATA_KEY);
  let userData = null;

  if (!dataAsJSON) {
    return userData;
  }

  try {
    userData = JSON.parse(dataAsJSON);
  } catch (e) {
    // no need to special error handling here
    console.log("Restoring user data failed.");
  }

  return userData;
};
