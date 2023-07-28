import { useLanguageJson } from "../../Contexts/States/languageJson";

const useTranslation = () => {
  const [languageJson] = useLanguageJson();
  
  const translation = (key: string) => {
    return languageJson[key];
  };

  return translation;
};

export default useTranslation;
