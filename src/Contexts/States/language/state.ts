import { useRecoilState } from "recoil";
import languageState from "./atom";

const useLanguage = () => useRecoilState(languageState);

export default useLanguage;
