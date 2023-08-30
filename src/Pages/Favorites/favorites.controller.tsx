import { FC, useEffect, useMemo, useState } from "react";

import { useTheme } from "../../Contexts/States/theme";
import setCardValues from "../../Components/Carousel/library/cardValues";

import View from "./favorites.view";
import IFavorites from "./favorites.props";
import ServiceFavorites from "../../Services/favorites/favorites.service";
import { ICard } from "../../Services";

const Favorites: FC<IFavorites> = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const cardValues = useMemo(() => setCardValues(windowSize), [windowSize]);
  const [favorites, setFavorites] = useState<ICard[]>([]);
  const theme = useTheme()[0];

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const serviceFavorites = useMemo(() => new ServiceFavorites(), []);

  const getFavorites = () => {
    const ids = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites") as string) : [];

    serviceFavorites.getFavorites(ids).then((favorites) => {
      setFavorites(favorites);
    });
  };

  useEffect(getFavorites, []);

  return <View favorites={favorites} cardSize={cardValues.cardSize} cardGap={cardValues.cardGap} theme={theme} />;
};

export default Favorites;
