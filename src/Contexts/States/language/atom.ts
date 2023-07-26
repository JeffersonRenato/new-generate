import { atom } from "recoil";

const languageState = atom({
  key: "languageState",
  default: "pt-BR",
});

export default languageState;
