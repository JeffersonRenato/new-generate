import { ABOUT } from "../constants";
import IAboutResponse from "../types/IAboutResponse";

class ServiceAbout {
  getAbouts = () => {
    return new Promise<IAboutResponse[]>((resolve) => {
      resolve(ABOUT);
    });
  };
}

export default ServiceAbout;
