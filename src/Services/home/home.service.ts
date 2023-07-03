import { CAROUSEL } from "../constants";
import ICarouselResponse from "../types/ICarouselResponse";

class ServiceHome {
  getCarousels = () => {
    return new Promise<ICarouselResponse[]>((resolve) => {
      resolve(CAROUSEL);
    });
  };
}

export default ServiceHome;
