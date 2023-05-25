import { FC, useEffect, useMemo, useState } from "react";
import ServiceHome from "../../Services/home/home.service";
import { ICarouselResponse } from "../../Services";

import View from "./home.view";

const Home: FC = () => {
  const [carousels, setCarousels] = useState<ICarouselResponse[]>([]);

  const serviceHome = useMemo(() => new ServiceHome(), []);

  const getCarousel = () => {
    serviceHome.getCarousels().then((carousels) => {
      setCarousels(carousels);
    });
  };

  useEffect(getCarousel, []);

  return <View carousels={carousels} />;
};

export default Home;
