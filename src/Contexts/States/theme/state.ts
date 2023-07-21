import { useRecoilState } from "recoil";
import themeState from "./atom";

const useTheme = () => useRecoilState(themeState);

export default useTheme;
