import { CARDS } from "../constants";
import ICarouselResponse from "../types/ICarouselResponse";

class ServiceHome {
  getCarousels = () => {
    return new Promise<ICarouselResponse[]>((resolve) => {
      resolve(CARDS);
    });
  };
}

export default ServiceHome;
