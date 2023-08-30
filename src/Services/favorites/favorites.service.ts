import { CARDS } from "../constants";
import { ICard } from "../types";

class ServiceFavorites {
  getFavorites = (ids: number[]) => {
    let allCards: Array<ICard> = [];
    for (let i = 0; i < CARDS.length; i++) {
      const line = CARDS[i];
      const cardsLine = line.cards;
      allCards = [...allCards, ...cardsLine];
    }

    const filteredCards = allCards.filter((card) => ids.includes(card.id));
    return new Promise<ICard[]>((resolve) => {
      resolve(filteredCards);
    });
  };
}

export default ServiceFavorites;
