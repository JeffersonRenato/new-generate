import { atom } from "recoil";

const themeState = atom({
  key: "themeState",
  default: localStorage.getItem("theme") || "dark",
});

export default themeState;
