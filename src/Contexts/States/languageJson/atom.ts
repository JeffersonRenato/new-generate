import { atom } from "recoil";
import portuguese from "../../../in18/portuguese.json"

const languageJsonState = atom<any>({
  key: "languageJsonState",
  default: portuguese,
});

export default languageJsonState;
