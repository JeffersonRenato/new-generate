import { useRecoilState } from "recoil";
import languageJsonState from "./atom";

const useLanguageJson = () => useRecoilState(languageJsonState);

export default useLanguageJson;
