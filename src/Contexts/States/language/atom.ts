import { atom } from "recoil";

const languageState = atom({
  key: "languageState",
  default: "en-US",
});

export default languageState;
